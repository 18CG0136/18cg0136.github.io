window.onload = () => {
  //cargar JSON
  let arrayElemen = [];
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "./js/PeriodicTableJSON.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      let json = JSON.parse(xobj.responseText);
      arrayElemen = json.elements;
      let todo = "";
      arrayElemen.forEach((element) => {
        if (element.name == "Hydrogen") {
          todo += `<li id="${element.name.toLowerCase()}" class="hydrogen" 
            data-name="Hidrogen" 
            data-id="${arrayElemen.indexOf(element) + 1}" 
            data-sim="${element.symbol}" 
            data-descr="${element.summary}">
            <abbr title="${element.name}">${element.symbol}</abbr>
        </li>`;
        } else {
          if (element.category.toLowerCase().includes("unknown")) {
            todo += `<li id="${element.name.toLowerCase()}" class="unknown"
            data-name="${element.name}" 
            data-id="${arrayElemen.indexOf(element) + 1}" 
            data-sim="${element.symbol}" 
            data-descr="${element.summary}">
                <abbr title="${element.name}">${element.symbol}</abbr>
            </li>`;
          } else {
            todo += `<li id="${element.name.toLowerCase()}" class="${element.category
              .replace(" ", "-")
              .replace(" ", "")}"
            data-name="${element.name}" 
            data-id="${arrayElemen.indexOf(element) + 1}" 
            data-sim="${element.symbol}" 
            data-descr="${element.summary}">
                <abbr title="${element.name}">${element.symbol}</abbr>
            </li>`;
          }
        }
      });
     document.getElementsByClassName("periodic-table")[0].innerHTML = todo;
    
    }
  };
  xobj.send(null);

  let elem = document.getElementsByTagName("li");
  for (let x = 0; x < elem.length; x++) {
    elem[x].addEventListener("click", (e) => {
      console.log(elem[x].innerHTML);
      let nom = elem[x].getAttribute("data-name");
      let des = elem[x].getAttribute("data-descr");
      let sim = elem[x].getAttribute("data-sim");
      document.getElementById("txtElemento").innerText = nom;
      document.getElementById("txtDescr").innerText = des;
      document.getElementById("txtSimbolo").innerText = sim;
    });
  }
};
