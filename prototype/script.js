(() => {
  const initialState = () => ({
    stage: "setup",
    funds: 600,
    week: 1,
    intakeOpen: false,
    reinforced: false,
    foxName: "",
    rehabStep: 0
  });

  let state = load();

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

  function load() {
    try {
      return JSON.parse(localStorage.getItem("fox-found-opening-prototype")) || initialState();
    } catch {
      return initialState();
    }
  }

  function save() {
    localStorage.setItem("fox-found-opening-prototype", JSON.stringify(state));
  }

  function reset() {
    localStorage.removeItem("fox-found-opening-prototype");
    state = initialState();
    render();
  }

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[c]));
  }

  function harley(text) {
    return `<div class="message harley">${text.replace(/\n\n/g,"<br><br>")}</div>`;
  }

  function setBriefing(html, actions = []) {
    $("briefing").innerHTML = html;
    $("primaryActions").innerHTML = "";
    actions.forEach(({label, kind="primary", fn}) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = kind;
      b.textContent = label;
      b.addEventListener("click", fn);
      $("primaryActions").appendChild(b);
    });
  }

  function renderStatus() {
    $("weekLabel").textContent = `Week ${state.week} · Spring`;
    $("fundsLabel").textContent = `$${state.funds.toLocaleString()}`;
    $("intakeLabel").textContent = state.intakeOpen ? "Open" : "Closed";
  }

  function renderFacilities() {
    $("facilities").innerHTML = `
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
      </div>`;
  }

  function showCaseCall() {
    $("casePanel").classList.remove("hidden");
    $("casePanel").innerHTML = `
      <div class="case-head">
        <div><p class="case-id">INCOMING CASE · FOX-002</p><h2>Young adult female red fox</h2></div>
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
        <button id="acceptCase" class="primary" type="button">Accept FOX-002</button>
        <button id="referCase" class="secondary" type="button">Refer to partner</button>
      </div>`;
    $("acceptCase").addEventListener("click", () => {
      state.intakeOpen = false;
      state.stage = "assessment";
      save(); render();
    });
    $("referCase").addEventListener("click", () => {
      state.intakeOpen = false;
      state.stage = "referred";
      save(); render();
    });
  }

  function renderAssessment() {
    $("casePanel").classList.remove("hidden");
    $("casePanel").innerHTML = `
      <p class="case-id">FOX-002 · INTAKE ASSESSMENT</p>
      <h2>No fracture detected</h2>
      <div class="notice"><strong>Assessment:</strong> Significant bruising and soft-tissue injury to the hind leg. No fracture. Rest, monitoring and gradual rehabilitation recommended. <strong>Release prognosis: excellent.</strong></div>
      ${harley("good news: nothing's broken\n\nother good news: she already hates me")}
      <p>This is the first rehabilitation fox the player can name. The rescue ID remains FOX-002 underneath any chosen name.</p>
      <div class="name-row">
        <input id="foxNameInput" maxlength="24" placeholder="Choose a name (optional)" aria-label="Name FOX-002">
        <button id="saveName" class="primary" type="button">Use this name</button>
        <button id="harleyName" class="secondary" type="button">Let Harley choose</button>
      </div>`;
    $("saveName").addEventListener("click", () => {
      const v = $("foxNameInput").value.trim();
      if (!v) return;
      state.foxName = v;
      state.stage = "rehab";
      save(); render();
    });
    $("harleyName").addEventListener("click", () => {
      const choices = ["Bramble","Artemis","Scarlet","Riot","Garnet"];
      state.foxName = choices[(state.week + 1) % choices.length];
      state.stage = "rehab";
      save(); render();
    });
  }

  function renderRehab() {
    $("rehabPanel").classList.remove("hidden");
    const step = rehabSteps[state.rehabStep];
    const displayName = escapeHtml(state.foxName || "FOX-002");
    const progress = rehabSteps.map((s,i) => {
      const cls = i < state.rehabStep ? "done" : i === state.rehabStep ? "current" : "";
      return `<li class="${cls}">${s.title}</li>`;
    }).join("");

    $("rehabPanel").innerHTML = `
      <p class="case-id">ACTIVE CASE · FOX-002</p>
      <h2>${displayName}</h2>
      <span class="pill good">${state.rehabStep === rehabSteps.length - 1 ? "Release ready" : "Needs attention"}</span>
      <h3>${step.title}</h3>
      <p>${step.body}</p>
      ${harley(step.harley)}
      <ul class="progress-list">${progress}</ul>
      <div class="actions"><button id="rehabAction" class="primary" type="button">${step.action}</button></div>`;

    $("rehabAction").addEventListener("click", () => {
      if (state.rehabStep === rehabSteps.length - 1) {
        state.stage = "complete";
      } else {
        state.rehabStep += 1;
        state.week += 1;
      }
      save(); render();
    });
  }

  function render() {
    renderStatus();
    renderFacilities();
    $("casePanel").classList.add("hidden");
    $("rehabPanel").classList.add("hidden");

    if (state.stage === "setup") {
      setBriefing(
        `${harley("we're basically ready.\n\nbasically.\n\nexcept if we put a fox in that run right now, there is a nonzero chance we wake up tomorrow with no fox and one extremely smug tunnel.")}<p>A startup improvement grant has provided <strong>$600</strong> to finish preparing the rehabilitation run.</p>`,
        [{label:"Install dig-proof reinforcement · $600",fn:()=>{
          state.funds -= 600; state.reinforced = true; state.stage = "ready"; save(); render();
        }}]
      );
    } else if (state.stage === "ready") {
      setBriefing(
        `${harley("there. now it's a fox enclosure instead of a strongly worded suggestion.")}<p>The basic rehabilitation run is fox-ready. Fox &amp; Found can now accept one uncomplicated rehabilitation case.</p>`,
        [{label:"Open for intake",fn:()=>{
          state.intakeOpen = true; state.stage = "intake"; save(); render();
        }}]
      );
    } else if (state.stage === "intake") {
      setBriefing(`${harley("we've got a call.\n\nyoung adult female. vehicle strike. they're worried about one of the hind legs.")}<p>The information is incomplete. Assessment will reveal whether this case is within Fox &amp; Found's capabilities.</p>`);
      showCaseCall();
    } else if (state.stage === "assessment") {
      setBriefing("<p>FOX-002 has arrived for assessment. Routine handling and care are abstracted; the player makes the meaningful case decisions.</p>");
      renderAssessment();
    } else if (state.stage === "rehab") {
      setBriefing("<p>Each turn now represents one week. Routine daily care happens in the background. Make the meaningful case decision and let the week advance.</p>");
      renderRehab();
    } else if (state.stage === "referred") {
      setBriefing(
        `${harley("referral is allowed. the point is getting the fox appropriate care, not keeping every case here.")}<p>For the full game, FOX-002 is intended to be the fixed first rehabilitation case. This prototype lets you test the referral interaction anyway.</p>`,
        [{label:"Reset and accept the tutorial case",fn:reset}]
      );
    } else if (state.stage === "complete") {
      const name = escapeHtml(state.foxName || "FOX-002");
      setBriefing(
        `${harley("wow.\n\nnot even a thank you.")}<p><strong>${name} has been released.</strong> Full hind-limb function was restored, and appropriate avoidance of humans was maintained throughout rehabilitation.</p><p>This is the end of the opening-loop prototype. The next layer will add FOX-003 through FOX-005, referrals, partner updates and the first real upgrade choices.</p>`,
        [{label:"Play prototype again",fn:reset}]
      );
    }
  }

  $("resetBtn").addEventListener("click", reset);
  render();
})();