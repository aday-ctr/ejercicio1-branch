(function () {
  window.addEventListener("message", (event) => {
    document.addEventListener("keydown", logKey);

    var spinner = document.getElementById("spinner");
    spinner.style.display = "none";
    const graph = event.data.graph;
    const icon = event.data.icon;
    loadDependency(graph);
    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested")?.classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }

    document.getElementById("expand").addEventListener("click", function () {
      expand();
      document.getElementById("expand").style.display = "None";
      document.getElementById("collapse").style.display = "inline-block";
    });

    var collapse = document.getElementById("collapse");
    collapse.addEventListener("click", function () {
      var caretDown = document.getElementsByClassName("caret");
      var nestedLI = document.getElementsByClassName("nested");
      for (i = 0; i < caretDown.length; i++) {
        if (nestedLI[i]) {
          nestedLI[i].classList.remove("active");
        }
        if (caretDown[i]) {
          caretDown[i].classList.remove("caret-down");
        }
      }
      collapse.style.display = "None";
      document.getElementById("expand").style.display = "inline-block";
    });

    let input = document.getElementById("input");

    input.oninput = filter;

    function filter(dep) {
      expand();
      var listItem = document.getElementsByClassName("list-group-item");
      var treeElement = document.getElementsByClassName("data-element-1");

      if (!dep.target.value || dep.target.value.length < 2) {
        const hidden = document.getElementsByClassName("hidden");
        Array.from(hidden).forEach((value) => value.classList.remove("hidden"));
        const show = document.getElementsByClassName("show");
        Array.from(show).forEach((value) => value.classList.remove("show"));
        return;
      }

      Array.from(treeElement).forEach((value) => {
        if (isSearch(value.innerHTML, dep.target.value) === -1) {
          value.classList.add("hidden");
          value.classList.remove("show");
        } else {
          value.classList.remove("hidden");
          value.classList.add("show");
        }
      });

      Array.from(listItem).forEach((value) => {
        const ul = value.querySelector("ul");
        if (ul) {
          const hiddenElement = ul.querySelector(".show");
          if(hiddenElement) {
            roundShowParent(hiddenElement);
            value.classList.remove("hidden");
          } else {
            value.classList.add("hidden");
          }
        }
      });

    }

    /**
     * 轮询剔除父级元素hidden
     * @param {*} element 
     * @returns 
     */
    function roundShowParent(element) {
        var parentElement = element.parentElement;
        if(parentElement.classList.contains("hidden")) {
            parentElement.classList.add("show");
            parentElement.classList.remove("hidden");
        }
        if(parentElement.classList.contains("list-group-item")) {
            return;
        }
        roundShowParent(parentElement);
    }

    function loadDependency(graph) {
      const key = Object.keys(graph)[0];
      delete graph[key];
      var ul = document.getElementById("graph");

      for (const property in graph) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");

        var text = document.createElement("span");
        text.classList.add("caret");
        text.innerHTML = parseProperty(property);
        li.appendChild(text);

        var childUL = document.createElement("ul");
        childUL.classList.add("nested");

        Object.keys(graph[property]).forEach((res) => {
          childUL.appendChild(createList(graph, res));
        });
        li.appendChild(childUL);

        ul.appendChild(li);
      }
    }

    function createList(graph, res) {
      var childLI = document.createElement("li");
      childLI.classList.add("data-element-1");
      var text = document.createElement("span");
      if(graph[res]) {
        text.classList.add("caret");
      }
      text.innerHTML = parseProperty(res);
      childLI.appendChild(text);

      if (graph[res]) {
        childLI.appendChild(createUL(graph[res]));
      }

      return childLI;
    }

    function createUL(res) {
      var childUL = document.createElement("ul");
      childUL.classList.add("nested");
      Object.keys(res).forEach((data) => {
        var li = document.createElement("li");
        li.classList.add("data-element-1");
        var text = document.createElement("span");
        if (Object.keys(res[data]).length > 0) {
          text.classList.add("caret");
        }
        text.innerHTML = parseProperty(data);
        li.appendChild(text);

        if (Object.keys(res[data]).length > 0) {
          li.appendChild(createUL(res[data]));
        }

        childUL.appendChild(li);
      });

      return childUL;
    }

    function expand() {
      var caretDown = document.getElementsByClassName("caret");
      var nestedLI = document.getElementsByClassName("nested");
      for (i = 0; i < caretDown.length; i++) {
        if (nestedLI[i]) {
          nestedLI[i].classList.add("active");
        }
        if (caretDown[i]) {
          caretDown[i].classList.add("caret-down");
        }
      }
    }

    function parseProperty(property) {
        var props = property.split(":");
        var html = "";
        html += `<img src="${icon.scheme}://${icon.authority}${icon.path}" width="14" heihgt="14" style="margin-right: 5px;"/>`;
        for(var i = 0; i < props.length; i++) {
            html += `<span>${props[i]}</span>:`;
        }
        // 去掉html最后一个冒号
        html = html.substring(0, html.length - 1);
        return html;
    }

    function isSearch(html, target) {
        var props = html.split(":");
        return props[1].indexOf(target);
    }

    function logKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.keyCode === 70) {
        document.getElementById("input").focus();
        e.preventDefault();
      }
    }
  });
})();
