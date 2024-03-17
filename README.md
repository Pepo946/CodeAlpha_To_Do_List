# **_Overview_**

- [Overview](The Project "**To-D-List**")
  - [Screenshot](images/Screenshot%202024-03-17%20104206.png)
  - [Links](https://github.com/Pepo946/CodeAlpha_To_Do_List.git)
- [My process](_#my-process_)
  - [Built with](Html Css JavaScript)
  - [What I learned](I learned how to use the addEventListener method to add an event listener to an element and how to use the removeEventListener method to remove an event listener from an element. I also learned how to use the getItem and setItem methods to store and retrieve data from the local storage. )
  - [Continued development](Now im try to make it using React)
  - [Useful resources](https://www.w3schools.com/jsref/met_storage_setitem.asp)
- [Author => Pepo]

## **Screenshot**

![Design Preview](images/Screenshot%202024-03-17%20104206.png)
![Design Preview](./images/Screenshot%202024-03-17%20105028gggggggggg.png)

## **Built with**

- Semantic HTML5 markup
- CSS custom properties
- JavaScript Dom

### **What I learned**

first time use Locale Storage with get-item and set-item 

```html
<div class="row">
          <input type="text" id="input-box" placeholder="Add Your Text" />
          <button onclick="addTask()">Add</button>
        </div>

```
```css
ul li::before {
  content: "";
  position: absolute;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-image: url(images/unchecked.png);
  background-size: cover;
  background-position: center;
  top: 12px;
  left: 8px;
}
ul li.checked {
  color: #555;
  text-decoration: line-through;
}
ul li.checked::before {
  background-image: url(images/checked.png);
}
```
```js
function addTask() {
  if (inputbox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    inputbox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    tacke(); // Save task to localStorage after adding
  }
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    tacke();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    tacke();
  }
});

function tacke() {
  localStorage.setItem("date", listcontainer.innerHTML); // Corrected innerHTML
}

function show() {
  listcontainer.innerHTML = localStorage.getItem("date"); // Corrected innerHTML
}

show();


const proudOfThisFunc = () => {
  console.log('Yayyyyyy , thank you for visiting 🎉')
}
```

### **Continued development**

My future PLans is to be more good in Web-Dev{is to learn more and complete my internship }

### **Useful resources**

- [Example resource](https://www.w3schools.com/jsref/met_storage_getitem.asp) - it help me to make a return information after i save them in local storage .

## **Author**

- LinkDen - [Pepo](https://www.linkedin.com/in/mohamed-gandoul-53a5ba258/)
- Frontend Mentor - [@Pepo946](https://www.frontendmentor.io/profile/Pepo946)
- Twitter - [@Pepo9461](https://www.twitter.com/yourusername)
