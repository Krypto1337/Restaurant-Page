//create html elements for hive-layout
//returns complete elements
function makeHive(pageConfig) {
  let outer = document.createElement("div");
  outer.classList.add("outer-hive");
  outer.classList.add(pageConfig[0]["outer"]);

  let inner = document.createElement("div");
  inner.classList.add("inner-hive");
  inner.classList.add(pageConfig[0]["inner"]);

  //Loop trough all except the first element
  for (let i = 1; i < pageConfig.length; i++) {
    if (pageConfig[i]["el"] == "p") {
      var element = document.createElement("p");
      let elementText = document.createTextNode(pageConfig[i]["text"]);
      element.appendChild(elementText);
    }
    element.classList.add[pageConfig[i]["class"]];
    inner.appendChild(element);
  }
  outer.appendChild(inner);

  return outer;
}

//creates a review object to be used with the makeLayout function
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

function loadMain(type, parent, contents, title, info) {
  parent.textContent = "";

  contents.forEach((content) => {
    var contentConfig = makeReview(content.text, content.name);
    let layout = makeHive(contentConfig);
    parent.appendChild(layout);
  });
}

export { loadMain };
