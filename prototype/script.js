(() => {
  const SAVE_KEY = "fox-found-opening-prototype-v2";

  const initialState = () => ({
    welcomed: false,
    activeTab: "overview",
    stage: "setup",
    funds: 600,
    standing: "New Rescue",
    week: 1,
    intakeOpen: false,
    reinforced: false,
    foxName: "",
    rehabStep: 0,
    transferWeek: null
  });

  const rehabSteps = [
    {
      title: "Intake assessment",
      body: "Responders suspected a broken hind leg after a vehicle sideswipe. Assessment shows significant bruising and soft-tissue injury, but no fracture.",
      harley: "good news: nothing's broken\n\nother good news: she already hates me",
      action: "Begin low-contact recovery"
    },
    {
      title: "Quiet recovery",
      body: "Direct checks show little change, but camera footage catches her putting more weight on the injured leg when nobody is nearby.",
      harley: "apparently the leg works better when we're not looking at it\n\nrude, but useful",
      action: "Review camera footage"
    },
    {
      title: "Mobility improving",
      body: "She is walking normally at low speed and consistently bearing weight. A reassessment can determine whether she is ready for the outdoor rehab run.",
      harley: "she saw me at the gate and immediately went the other way\n\nexcellent professional feedback",
      action: "Request reassessment"
    },
    {
      title: "Outdoor conditioning",
      body: "She has moved into the rehab run. Running, turning, digging and climbing are returning without obvious difficulty.",
      harley: "full-speed fox has resumed\n\nwe should probably take that personally",
      action: "Use naturalistic feeding"
    },
    {
      title: "Wild behaviour check",
      body: "She waits for staff to leave before emerging, retrieves hidden food, remains alert to unfamiliar sounds, and avoids people consistently.",
      harley: "she hates us 🥹\n\nperfect.",
      action: "Request release assessment"
    },
    {
      title: "Release ready",
      body: "Full hind-limb function has returned. Independent behaviour and appropriate human avoidance are intact. She is medically and behaviourally cleared for release.",
      harley: "she's ready.\n\nwhich means our job is to make sure she never needs us again.",
      action: "Release FOX-002"
    }
  ];

  const $ = id => document.getElementById(id);
  let state = load();

  function load() {
    try {
      return JSON.parse(localStorage.getItem(SAVE_KEY)) || initialState();
    } catch {
      return initialState();
    }
  }

  function save() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch {
      // Some mobile/in-app browsers can block localStorage.
      // Gameplay should continue in memory even when saving is unavailable.
    }
  }

  function reset() {
    try {
      localStorage.removeItem(SAVE_KEY);
    } catch {
      // Continue with an in-memory reset if browser storage is unavailable.
    }
    state = initialState();
    render();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[c]));
  }

  function harley(text) {
    return `<div class="message harley">${text.replace(/\n\n/g,"<br><br>")}</div>`;
  }

  function switchTab(tab) {
    state.activeTab = tab;
    save();
    renderTabs();
  }

  function renderTabs() {
    const tabs = ["overview","foxes","intake","facilities","records"];
    tabs.forEach(tab => {
      $(`${tab}Tab`).classList.toggle("hidden", state.activeTab !== tab);
      const button = document.querySelector(`[data-tab="${tab}"]`);
      button.classList.toggle("active", state.activeTab === tab);
      button.setAttribute("aria-current", state.activeTab === tab ? "page" : "false");
    });
  }

  function renderStatus() {
    $("weekLabel").textContent = `Week ${state.week} · Spring`;
    $("fundsLabel").textContent = `$${state.funds.toLocaleString()}`;
    $("standingLabel").textContent = state.standing;
    $("intakeLabel").textContent = state.intakeOpen ? "Open" : "Closed";
  }

  function activeFoxName() {
    return state.foxName || "FOX-002";
  }

  function hasAcceptedFox() {
    return ["assessment","rehab"].includes(state.stage);
  }

  function renderOverview() {
    let body = "";

    if (state.stage === "setup") {
      body = `
        <div class="card card-accent panel-pad">
          <p class="eyebrow">HARLEY · WEEK 1 BRIEFING</p>
          ${harley("we're basically ready.\n\nbasically.\n\nexcept if we put a fox in that run right now, there is a nonzero chance we wake up tomorrow with no fox and one extremely smug tunnel.")}
          <p>A startup improvement grant has provided <strong>$600</strong> to finish preparing the rehabilitation run.</p>
          <div class="actions"><button class="primary" data-go="facilities">Go to Facilities</button></div>
        </div>`;
    } else if (state.stage === "ready") {
      body = `
        <div class="card card-accent panel-pad">
          <p class="eyebrow">HARLEY · UPDATE</p>
          ${harley("there. now it's a fox enclosure instead of a strongly worded suggestion.")}
          <p>The basic rehabilitation run is fox-ready. Fox &amp; Found can accept one uncomplicated rehabilitation case.</p>
          <div class="actions"><button class="primary" data-go="intake">Go to Intake</button></div>
        </div>`;
    } else if (state.stage === "incoming") {
      body = `
        <div class="card card-accent panel-pad">
          <p class="eyebrow">INCOMING CASE</p>
          ${harley("we've got a call.\n\nyoung adult female. vehicle strike. they're worried about one of the hind legs.")}
          <p>There is a case waiting in Intake.</p>
          <div class="actions"><button class="primary" data-go="intake">Review FOX-002</button></div>
        </div>`;
    } else if (state.stage === "assessment" || state.stage === "rehab") {
      const step = state.stage === "assessment" ? rehabSteps[0] : rehabSteps[state.rehabStep];
      body = `
        <div class="card card-accent panel-pad">
          <p class="eyebrow">THIS WEEK</p>
          <h2>${escapeHtml(activeFoxName())}</h2>
          <p>${step.title}: ${step.body}</p>
          <div class="actions"><button class="primary" data-go="foxes">Open case record</button></div>
        </div>`;
    } else if (state.stage === "referred") {
      body = `
        <div class="card card-accent panel-pad">
          <p class="eyebrow">CASE REFERRED</p>
          ${harley("the point is getting the fox appropriate care, not keeping every case here.")}
          <p>FOX-002 is now in partner care and has been added to Records.</p>
          <div class="actions"><button class="primary" data-go="records">View Records</button></div>
        </div>`;
    } else if (state.stage === "transferred") {
      body = `
        <div class="card card-accent panel-pad">
          <p class="eyebrow">CASE TRANSFERRED</p>
          ${harley("if we're in over our heads, we say so.\n\npride is not a treatment plan.")}
          <p>${escapeHtml(activeFoxName())} is continuing rehabilitation with a qualified partner. Professional Standing is unchanged.</p>
          <div class="actions"><button class="primary" data-go="records">View partner update</button></div>
        </div>`;
    } else if (state.stage === "complete") {
      body = `
        <div class="card card-accent panel-pad">
          <p class="eyebrow">RELEASE COMPLETE</p>
          ${harley("wow.\n\nnot even a thank you.")}
          <p><strong>${escapeHtml(activeFoxName())} has been released.</strong> Full hind-limb function was restored, and appropriate human avoidance was maintained.</p>
          <div class="actions"><button class="primary" data-go="records">View Records</button></div>
        </div>`;
    }

    $("overviewTab").innerHTML = `
      <div class="two-column">
        <div class="stack">${body}</div>
        <div class="stack">
          <div class="card panel-pad">
            <p class="eyebrow">QUICK STATUS</p>
            <div class="quick-grid">
              <div class="quick"><span>PERMANENT RESIDENTS</span>1 · Loki</div>
              <div class="quick"><span>ACTIVE REHAB CASES</span>${hasAcceptedFox() ? "1" : "0"}</div>
              <div class="quick"><span>GENERAL REHAB SLOTS</span>${state.reinforced ? "1" : "0 ready"}</div>
              <div class="quick"><span>INTAKE</span>${state.intakeOpen ? "Open" : "Closed"}</div>
            </div>
          </div>
        </div>
      </div>`;

    document.querySelectorAll("[data-go]").forEach(btn => {
      btn.addEventListener("click", () => switchTab(btn.dataset.go));
    });
  }

  function renderLokiCard() {
    return `
      <article class="card fox-profile">
        <div class="fox-photo-frame">
          <img src="../images/foxes/fox-001-loki.jpg" alt="Real photograph representing fictional resident Loki">
        </div>
        <div class="fox-copy">
          <p class="eyebrow">PERMANENT RESIDENT</p>
          <h2>FOX-001 · Loki</h2>
          <p>Red fox · permanent sanctuary</p>
          <span class="pill good">Routine care only</span>
          <p>Harley has cared for Loki since he was a kit. He does not use a rehabilitation slot and cannot be transferred.</p>
          <p class="small">Permanent sanctuary is a successful welfare outcome when release is not appropriate.</p>
        </div>
      </article>`;
  }

  function renderFoxes() {
    let active = "";

    if (state.stage === "assessment") {
      active = `
        <article class="card fox-profile">
          <div class="fox-placeholder">
            <div><strong>FOX-002</strong><span>Real case photo not selected yet</span></div>
          </div>
          <div class="fox-copy">
            <p class="eyebrow">ACTIVE CASE · INTAKE ASSESSMENT</p>
            <h2>FOX-002</h2>
            <span class="pill warn">Needs care plan</span>
            <div class="notice"><strong>Assessment:</strong> Significant bruising and soft-tissue injury to the hind leg. No fracture. Rest, monitoring and gradual rehabilitation recommended. <strong>Release prognosis: excellent.</strong></div>
            ${harley("good news: nothing's broken\n\nother good news: she already hates me")}
            <p>This is the first rehabilitation fox you can name. The rescue ID remains FOX-002 underneath any chosen name.</p>
            <div class="name-row">
              <input id="foxNameInput" maxlength="24" placeholder="Choose a name" aria-label="Name FOX-002">
              <button id="saveNameBtn" class="primary" type="button">Use this name</button>
              <button id="harleyNameBtn" class="secondary" type="button">Let Harley choose</button>
            </div>
            <div class="actions"><button id="transferFoxBtn" class="quiet-danger" type="button">Request partner transfer</button></div>
          </div>
        </article>`;
    } else if (state.stage === "rehab") {
      const step = rehabSteps[state.rehabStep];
      const progress = rehabSteps.map((s,i) => {
        const cls = i < state.rehabStep ? "done" : i === state.rehabStep ? "current" : "";
        return `<li class="${cls}">${s.title}</li>`;
      }).join("");

      active = `
        <article class="card fox-profile">
          <div class="fox-placeholder">
            <div><strong>FOX-002</strong><span>Real case photo not selected yet</span></div>
          </div>
          <div class="fox-copy">
            <p class="eyebrow">ACTIVE CASE · FOX-002</p>
            <h2>${escapeHtml(activeFoxName())}</h2>
            <span class="pill good">${state.rehabStep === rehabSteps.length - 1 ? "Release ready" : "Needs attention"}</span>
            <h3>${step.title}</h3>
            <p>${step.body}</p>
            ${harley(step.harley)}
            <ul class="progress-list">${progress}</ul>
            <div class="actions">
              <button id="rehabActionBtn" class="primary" type="button">${step.action}</button>
              <button id="transferFoxBtn" class="quiet-danger" type="button">Request partner transfer</button>
            </div>
          </div>
        </article>`;
    } else {
      active = `
        <div class="card panel-pad">
          <p class="eyebrow">ACTIVE REHABILITATION</p>
          <p class="tab-help">No fox is currently in active rehabilitation at Fox &amp; Found.</p>
        </div>`;
    }

    $("foxesTab").innerHTML = `
      <div class="stack">
        <div>
          <p class="eyebrow">FOXES</p>
          <p class="tab-help">Permanent residents and active cases live here. Open a case to review milestones, observations, and case actions.</p>
        </div>
        ${renderLokiCard()}
        ${active}
      </div>`;

    const saveNameBtn = $("saveNameBtn");
    if (saveNameBtn) {
      saveNameBtn.addEventListener("click", () => {
        const value = $("foxNameInput").value.trim();
        if (!value) return;
        state.foxName = value;
        state.stage = "rehab";
        state.rehabStep = 0;
        save();
        render();
      });
      $("harleyNameBtn").addEventListener("click", () => {
        const choices = ["Bramble","Artemis","Scarlet","Riot","Garnet"];
        state.foxName = choices[(state.week + 1) % choices.length];
        state.stage = "rehab";
        state.rehabStep = 0;
        save();
        render();
      });
    }

    const rehabActionBtn = $("rehabActionBtn");
    if (rehabActionBtn) {
      rehabActionBtn.addEventListener("click", () => {
        if (state.rehabStep === rehabSteps.length - 1) {
          state.stage = "complete";
          state.activeTab = "overview";
        } else {
          state.rehabStep += 1;
          state.week += 1;
        }
        save();
        render();
      });
    }

    const transferBtn = $("transferFoxBtn");
    if (transferBtn) {
      transferBtn.addEventListener("click", () => $("transferModal").classList.remove("hidden"));
    }
  }

  function renderIntake() {
    let content = "";

    if (!state.reinforced) {
      content = `
        <div class="card panel-pad">
          <p class="eyebrow">INTAKE CLOSED</p>
          <h2>The rehabilitation run is not ready yet</h2>
          <p>Finish the required dig-proof reinforcement before Fox &amp; Found can accept an uncomplicated case.</p>
          <div class="actions"><button class="primary" data-go="facilities">Go to Facilities</button></div>
        </div>`;
    } else if (state.stage === "ready") {
      content = `
        <div class="card panel-pad">
          <p class="eyebrow">INTAKE</p>
          <h2>Fox &amp; Found is ready for one uncomplicated case</h2>
          <p>Opening intake tells the partner network that you currently have capacity.</p>
          <div class="actions"><button id="openIntakeBtn" class="primary" type="button">Open for intake</button></div>
        </div>`;
    } else if (state.stage === "incoming") {
      content = `
        <div class="card panel-pad">
          <div class="case-head">
            <div><p class="eyebrow">INCOMING CASE · FOX-002</p><h2>Young adult female red fox</h2></div>
            <span class="pill warn">Needs assessment</span>
          </div>
          <p>A wildlife-response partner has a fox that was sideswiped by a vehicle. She moved off the road but is reluctant to use one hind leg. Responders are concerned it may be fractured.</p>
          <div class="fact-grid">
            <div class="fact"><span>KNOWN</span>Young adult · female · red fox</div>
            <div class="fact"><span>CONCERN</span>Possible hind-leg fracture</div>
            <div class="fact"><span>BEHAVIOUR</span>Alert · highly wary of people</div>
            <div class="fact"><span>YOUR CAPACITY</span>Intake ready · rehab run ready</div>
          </div>
          <div class="actions">
            <button id="acceptCaseBtn" class="primary" type="button">Accept FOX-002</button>
            <button id="referCaseBtn" class="secondary" type="button">Refer to partner</button>
          </div>
        </div>`;
    } else {
      content = `
        <div class="card panel-pad">
          <p class="eyebrow">INTAKE</p>
          <h2>${state.intakeOpen ? "Open" : "Closed"}</h2>
          <p>${hasAcceptedFox() ? "Intake is closed while the opening tutorial case is active." : "There is no incoming case waiting right now."}</p>
        </div>`;
    }

    $("intakeTab").innerHTML = `
      <div class="stack">
        <div>
          <p class="eyebrow">INTAKE</p>
          <p class="tab-help">Control availability and decide whether incoming cases should be accepted or referred.</p>
        </div>
        ${content}
      </div>`;

    document.querySelectorAll("[data-go]").forEach(btn => {
      btn.addEventListener("click", () => switchTab(btn.dataset.go));
    });

    const open = $("openIntakeBtn");
    if (open) open.addEventListener("click", () => {
      state.intakeOpen = true;
      state.stage = "incoming";
      save();
      render();
    });

    const accept = $("acceptCaseBtn");
    if (accept) accept.addEventListener("click", () => {
      state.intakeOpen = false;
      state.stage = "assessment";
      state.activeTab = "foxes";
      save();
      render();
    });

    const refer = $("referCaseBtn");
    if (refer) refer.addEventListener("click", () => {
      state.intakeOpen = false;
      state.stage = "referred";
      state.activeTab = "records";
      save();
      render();
    });
  }

  function renderFacilities() {
    const upgrade = !state.reinforced ? `
      <div class="notice">
        <strong>Required before first intake:</strong> Dig-proof perimeter reinforcement
        <div class="actions"><button id="reinforceBtn" class="primary" type="button">Install · $600</button></div>
      </div>` : "";

    $("facilitiesTab").innerHTML = `
      <div class="two-column">
        <div class="card panel-pad">
          <p class="eyebrow">FACILITIES</p>
          <h2>Starter property</h2>
          <div class="facility">
            <div class="facility-top"><strong>Loki's permanent enclosure</strong><span class="status ready">Ready</span></div>
            <p>Dedicated permanent-care housing. Does not use a rehab slot.</p>
          </div>
          <div class="facility">
            <div class="facility-top"><strong>Intake / quarantine</strong><span class="status ready">Ready</span></div>
            <p>Basic short-term intake and assessment space.</p>
          </div>
          <div class="facility">
            <div class="facility-top"><strong>Basic rehab run</strong><span class="status ${state.reinforced ? "ready" : "blocked"}">${state.reinforced ? "Fox-ready" : "Blocked"}</span></div>
            <p>${state.reinforced ? "Dig-proof perimeter installed." : "Missing secure dig-proof perimeter reinforcement."}</p>
          </div>
          <div class="facility">
            <div class="facility-top"><strong>Camera monitoring</strong><span class="status ready">Ready</span></div>
            <p>Simple low-contact behavioural observation.</p>
          </div>
          ${upgrade}
        </div>
        <div class="card panel-pad">
          <p class="eyebrow">COMING AFTER THE TUTORIAL</p>
          <h2>First upgrade choices</h2>
          <div class="facility"><strong>Improved Food Storage</strong><p>Larger, safer food reserve.</p></div>
          <div class="facility"><strong>Improved Office &amp; Records</strong><p>Grant opportunities and later administration.</p></div>
          <div class="facility"><strong>Second Rehabilitation Enclosure</strong><p>Add another general rehab slot.</p></div>
          <div class="facility"><strong>Infectious-Disease Isolation</strong><p>Safely admit contagious cases.</p></div>
        </div>
      </div>`;

    const reinforce = $("reinforceBtn");
    if (reinforce) reinforce.addEventListener("click", () => {
      state.funds -= 600;
      state.reinforced = true;
      state.stage = "ready";
      save();
      render();
    });
  }

  function renderRecords() {
    let record = `
      <div class="record-item">
        <p><strong>FOX-001 · Loki</strong></p>
        <span class="pill good">Permanent sanctuary</span>
        <p class="small">Permanent resident of Fox &amp; Found. Harley has cared for him since he was a kit.</p>
      </div>`;

    if (state.stage === "referred") {
      record += `
        <div class="record-item">
          <p><strong>FOX-002</strong></p>
          <span class="pill neutral">Referred at intake</span>
          <p class="small">A partner facility accepted the case. Referral did not reduce Professional Standing.</p>
        </div>`;
    } else if (state.stage === "transferred") {
      record += `
        <div class="record-item">
          <p><strong>${escapeHtml(activeFoxName())} · FOX-002</strong></p>
          <span class="pill neutral">Transferred · Week ${state.transferWeek}</span>
          <p>Partner update: settled into low-contact care and continuing rehabilitation.</p>
          <p class="small">Professional Standing unchanged. Future partner updates will continue here.</p>
        </div>`;
    } else if (state.stage === "complete") {
      record += `
        <div class="record-item">
          <p><strong>${escapeHtml(activeFoxName())} · FOX-002</strong></p>
          <span class="pill good">Released</span>
          <p class="small">Full hind-limb function restored. Appropriate avoidance of humans maintained throughout rehabilitation.</p>
        </div>`;
    }

    $("recordsTab").innerHTML = `
      <div class="card panel-pad">
        <p class="eyebrow">RECORDS</p>
        <h2>Fox &amp; Found case history</h2>
        <p class="tab-help">Released, sanctuary, referred, and transferred foxes remain part of the rescue's history.</p>
        <div class="record-list">${record}</div>
      </div>`;
  }

  function render() {
    $("welcomeScreen").classList.toggle("hidden", state.welcomed);
    $("gameShell").classList.toggle("hidden", !state.welcomed);

    if (!state.welcomed) return;

    renderStatus();
    renderOverview();
    renderFoxes();
    renderIntake();
    renderFacilities();
    renderRecords();
    renderTabs();
  }

  document.querySelectorAll("[data-tab]").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  $("beginBtn").addEventListener("click", () => {
    state.welcomed = true;
    state.activeTab = "overview";
    save();
    render();
  });

  $("resetBtn").addEventListener("click", reset);

  $("cancelTransferBtn").addEventListener("click", () => {
    $("transferModal").classList.add("hidden");
  });

  $("confirmTransferBtn").addEventListener("click", () => {
    $("transferModal").classList.add("hidden");
    state.transferWeek = state.week;
    state.stage = "transferred";
    state.intakeOpen = false;
    state.activeTab = "records";
    save();
    render();
  });

  $("transferModal").addEventListener("click", event => {
    if (event.target === $("transferModal")) $("transferModal").classList.add("hidden");
  });

  render();
})();
