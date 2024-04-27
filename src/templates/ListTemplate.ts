import FullList from "../model/FullList";

interface DomList {
   ul: HTMLUListElement;
   clear():void;
   render(fullList: FullList):void;
}

export default class listTamplate implements DomList {

   ul: HTMLUListElement;

   static instance: listTamplate = new listTamplate();

   private constructor() {
      this.ul = document.getElementById("listItems") as HTMLUListElement;
   }

   clear(): void {
      this.ul.innerHTML = "";
   }

   render(fullList: FullList): void {
      this.clear();

      fullList.list.forEach(item => {
         const li = document.createElement("li") as HTMLElement;
         li.className = "item";

         const check = document.createElement("input") as HTMLInputElement;
         
         check.type = "checkbox";
         check.id = item.id;
         check.tabIndex = 0;
         check.checked = item.checkStatus;
         li.append(check);

         check.addEventListener("change", () => {
            item.checkStatus = !item.checkStatus
            fullList.save();
         })

         const label = document.createElement("label") as HTMLLabelElement;
         label.htmlFor = item.id;
         // Item prop is a description written in interface "Item" in ListItem.js:
         label.textContent = item.item;
         li.append(label);

         const btn = document.createElement("button") as HTMLButtonElement;
         btn.className = "button";
         btn.textContent = "X";
         li.append(btn);

         btn.addEventListener("click", (evt)=>{
            evt.preventDefault();
            fullList.removeItem(item.id);
            this.render(fullList);
         })

         this.ul.append(li);
      })
      
   }
}