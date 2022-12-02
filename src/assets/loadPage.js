//create html elements for hive-layout
//returns complete elements
function makeHive(pageConfig) {
  let outer = document.createElement("div");
  outer.classList.add("hive-outer");
  outer.classList.add(pageConfig[0]["outer"]);

  let inner = document.createElement("div");
  inner.classList.add("hive-inner");
  inner.classList.add(pageConfig[0]["inner"]);

  // Loop through all but the first element of the given object creating and adding elements to the honeycomb
  for (let i = 1; i < pageConfig.length; i++) {
    if (pageConfig[i]["el"] == "p") {
      var element = document.createElement("p");
      let elementText = document.createTextNode(pageConfig[i]["text"]);

      element.appendChild(elementText);
    } else if (pageConfig[i]["el"] == "h3") {
      var element = document.createElement("h3");
      let elementText = document.createTextNode(pageConfig[i]["text"]);

      element.appendChild(elementText);
    } else {
      var element = document.createElement("div");
      element.style.backgroundImage = `url(${pageConfig[i]["source"]})`;
      element.setAttribute("title", pageConfig[i]["text"]);
    }

    element.classList.add(pageConfig[i]["class"]);

    inner.appendChild(element);
  }

  outer.appendChild(inner);

  return outer;
}

//creates a review object for makeHive function
function makeReview(review, name) {
  return [
    {
      outer: "review-outer",
      inner: "review-inner",
    },
    {
      el: "p",
      text: review,
      class: "review",
    },
    {
      el: "p",
      text: name,
      class: "customer",
    },
  ];
}

//create object for makeHive
//return object
function makeInfo(info) {
  return [
    [
      {
        outer: "info-hours-outer",
        inner: "info-hours-inner",
      },
      {
        el: "h3",
        text: "Hours",
        class: "hours",
      },
      {
        el: "p",
        text: `Monday: ${info.hours.monday.open}am - ${info.hours.monday.close}pm`,
        class: "monday",
      },
      {
        el: "p",
        text: `Tuesday: ${info.hours.tuesday.open}am - ${info.hours.tuesday.close}pm`,
        class: "tuesday",
      },
      {
        el: "p",
        text: `Wednesday: ${info.hours.wednesday.open}am - ${info.hours.wednesday.close}pm`,
        class: "wednesday",
      },
      {
        el: "p",
        text: `Thursday: ${info.hours.thursday.open}am - ${info.hours.thursday.close}pm`,
        class: "thursday",
      },
      {
        el: "p",
        text: `Friday: ${info.hours.friday.open}am - ${info.hours.friday.close}pm`,
        class: "friday",
      },
      {
        el: "p",
        text: `Saturday: ${info.hours.saturday.open}am - ${info.hours.saturday.close}pm`,
        class: "saturday",
      },
      {
        el: "p",
        text: `Sunday: ${info.hours.sunday.open}am - ${info.hours.sunday.close}pm`,
        class: "sunday",
      },
    ],
    [
      {
        outer: "location-info-outer",
        inner: "location-info-inner",
      },
      {
        el: "h3",
        text: "Location",
        class: "location",
      },
      {
        el: "p",
        text: `${info.location.street}, ${info.location.city}, ${info.location.country}`,
        class: "address",
      },
    ],
  ];
}

//Create info elements
function loadInfo(parent, info) {
  let information = makeInfo(info);

  information.forEach((section) => {
    let infoHive = makeHive(section);
    parent.appendChild(infoHive);
  });

  return true;
}

//Clear parent text
function clearPage(parent) {
  parent.textContent = "";
  return true;
}

function makeTitleElement(pageTitle, headerClass, containerClass) {
  let container = document.createElement("div");
  container.classList.add("header-container");

  let header = document.createElement("div");
  header.classList.add("header");

  let title = document.createElement("h1");
  title.textContent = pageTitle;

  if (containerClass) {
    container.classList.add(containerClass);
  }
  if (headerClass) {
    header.classList.add(headerClass);
  }

  header.appendChild(title);

  container.appendChild(header);
  return container;
}

//clear page, then load everything
function loadMain(type, parent, contents, title, info) {
  clearPage(parent);
  loadTitle(type, parent, title);

  contents.forEach((content) => {
    if (type == "home") {
      var contentConfig = makeReview(content.text, content.name);
    }

    let layout = makeHive(contentConfig);
    parent.appendChild(layout);
  });

  if (type == "home") {
    loadInfo(parent, info);
  }
}

function loadTitle(type, parent, title) {
  if (type == "home") {
    var titleElement = makeTitleElement(title.title);
  } else if (type == "menu") {
    var titleElement = makeTitleElement(
      title.title,
      "menu-header",
      "menu-container"
    );
  } else if (type == "about") {
    var titleElement = makeTitleElement(
      title.title,
      "about-header",
      "about-container"
    );
  } else {
    var titleElement = makeTitleElement(title.title);
  }

  parent.appendChild(titleElement);
  return true;
}

export { loadMain };
