import { NewMdcDialog } from './mdc-builder';
export class DetailsDialog {
    constructor(tagid, data) {
        this.detailData = data;
        this.tagid = tagid;
        const queryValue = "#" + tagid;
        const container = document.querySelector(queryValue);
        this.popupDetailsDialog(container);
        //use container div to close popup form
        container.addEventListener('click', (e) => {
            e.preventDefault();
            const clickPopup = new CustomEvent('clickPopup', { detail: e.target });
            window.dispatchEvent(clickPopup);
        });
    }
    ;
    popupDetailsDialog(container) {
        //check popup container and display none => block to show in UI
        if (container.firstChild)
            container.removeChild(container.firstChild);
        const extraOptions = [
            { value: "extraBreakfast", viewValue: "Breakfast" },
            { value: "extraTV", viewValue: "TV" },
            { value: "extraWiFi", viewValue: "WiFi" },
            { value: "extraParking", viewValue: "Parking" },
            { value: "extraBalcony", viewValue: "Balcony" }
        ];
        //const formContainerDiv = document.createElement('div');
        // <div class="mdc-dialog mdc-dialog--open mdc-dialog--fullscreen">
        //         <div class="mdc-dialog__container">
        //             <div class="mdc-dialog__surface"
        //                 role="dialog"
        //                 aria-modal="true"
        //                 aria-labelledby="my-dialog-title"
        //                 aria-describedby="my-dialog-content">
        //                 <div class="mdc-dialog__content" id="my-dialog-content">
        //                     <div>
        //                         <form>
        //                             <input type="date" name="arrival" id="arrival"/>
        //                             <label for="arrival" id="arrival-datepicker-label">Arrival Date</label>
        //                             <input type="date" name="departure" id="departure"/>
        //                             <label for="departure" id="departure-datepicker-label">Departure Date</label>
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <form>
        //                             <select name="roomsize" id="roomsize">
        //                                 <option value="business-suite" id="business-suite">Business Suite</option>
        //                                 <option value="presidential-suite" id="presidential-suite">Presidential Suite</option>
        //                             </select>
        //                         </form>
        //                         <form>
        //                             <input type="number"  max="5" min="1" id="roomquantity">
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <form>
        //                             <input type="text" name="firstname" id="firstname" />
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <form>
        //                             <input type="text" name="lastname" id="lastname" />
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <form>
        //                             <input type="email" id="email">
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <form>
        //                             <input type="tel"  id="phone" >
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <form>
        //                             <input type="text" id="streetname">
        //                         </form>
        //                         <form>
        //                             <input type="number" id="streetnumber" >
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <form>
        //                             <input type="text" id="zip">
        //                         </form>
        //                         <form>
        //                             <input type="text" id="state">
        //                         </form>
        //                         <form>
        //                             <input type="text" id="city" >
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <select name="extras" id="extras">
        //                         </select>
        //                     </div>
        //                     <div>
        //                         <form>
        //                             <input type="radio" id="cc" value="cc">
        //                             <label for="cc">Credit Card</label>
        //                             <input type="radio" id="pp" value="pp">
        //                             <label for="pp">PayPal</label>
        //                             <input type="radio" id="cash" value="cash">
        //                             <label for="cash">Cash</label>
        //                             <input type="radio" id="bc" value="bc">
        //                             <label for="bc">Bitcoin</label>
        //                         </form>
        //                     </div>
        //                     <br>
        //                     <div>
        //                         <form>
        //                             <label>Personal Note</label>
        //                             <input type="text" id="note" >
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <form class="tag-list" >
        //                             <label>Tags</label>
        //                             <input type="text" id="tags" >
        //                         </form>
        //                     </div>
        //                     <div>
        //                         <label class="switch">
        //                             <input type="checkbox" id="reminder">
        //                             Send me a reminder
        //                             <span class="slider round"></span>
        //                         </label>
        //                         <label class="switch">
        //                             <input type="checkbox" id="newsletter">
        //                             Subscribe to newsletter
        //                             <span class="slider round"></span>
        //                         </label>
        //                         <br>
        //                         <input type="checkbox" id="confirm" />I confirm the information given above
        //                     </div>
        //                 </div>
        //                 <div class="mdc-dialog__actions">
        //                     <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">
        //                     <div class="mdc-button__ripple"></div>
        //                     <span class="mdc-button__label">Cancel</span>
        //                     </button>
        //                     <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="accept">
        //                     <div class="mdc-button__ripple"></div>
        //                     <span class="mdc-button__label">OK</span>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="mdc-dialog__scrim"></div>
        //     </div>
        container.innerHTML = `
        <div class="mdc-dialog mdc-dialog--open mdc-dialog--fullscreen">
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface"
      role="dialog"
      aria-modal="true"
      aria-labelledby="my-dialog-title"
      aria-describedby="my-dialog-content">
      <div class="mdc-dialog__header">
        <h2 class="mdc-dialog__title" id="my-dialog-title">
          Full-Screen Dialog Title
        </h2>
        <button class="mdc-icon-button material-icons mdc-dialog__close"
                data-mdc-dialog-action="close">
          close
        </button>
      </div>
      <div class="mdc-dialog__content" id="my-dialog-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed scelerisque metus dapibus, maximus massa pulvinar, commodo nunc.
        Quisque vitae luctus lectus, ut tempus ipsum. Sed suscipit gravida scelerisque.
        Aenean vulputate elementum est, quis consectetur orci consectetur ac.
        Quisque accumsan vel nisi id dapibus. Suspendisse nec urna eu massa ornare rutrum.
        Vivamus at nisi sit amet nulla pretium volutpat sit amet in justo. Donec mi metus,
        interdum ac tincidunt at, vehicula vitae nisl. Morbi fermentum dapibus massa,
        nec lobortis massa vestibulum eu.
      </div>
      <div class="mdc-dialog__actions">
        <button type="button" class="mdc-button mdc-dialog__button"
                data-mdc-dialog-action="ok">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">OK</span>
        </button>
      </div>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>
            
            
        `;
        // const dialogContainerDiv = document.createElement('div');
        // dialogContainerDiv.setAttribute("id", "dialog-container");
        // dialogContainerDiv.style.setProperty("margin", "50px auto");
        // dialogContainerDiv.style.setProperty("border","1px solid #999");
        // dialogContainerDiv.style.setProperty("width", "60%");
        // dialogContainerDiv?.appendChild(formContainerDiv);
        // container?.appendChild(dialogContainerDiv);
        // const arrival = <HTMLInputElement>document.getElementById("arrival");
        // arrival.valueAsDate  = new Date(this.detailData.stay.arrivalDate); //new Date().toLocaleDateString();
        // const departure = <HTMLInputElement>document.getElementById("departure");
        // departure.valueAsDate = new Date(this.detailData.stay.departureDate); //new Date().toLocaleDateString();
        // const roomsize = <HTMLInputElement>document.getElementById(this.detailData.room.roomSize);
        // roomsize.setAttribute("selected","selected");
        // const roomquantity = <HTMLInputElement>document.getElementById("roomquantity");
        // roomquantity.value = this.detailData.room.roomQuantity;
        // const firstname = <HTMLInputElement>document.getElementById("firstname");
        // firstname.value = this.detailData.firstName;
        // const lastname = <HTMLInputElement>document.getElementById("lastname");
        // lastname.value = this.detailData.lastName;
        // const email = <HTMLInputElement>document.getElementById("email");
        // email.value = this.detailData.email;
        // const phone = <HTMLInputElement>document.getElementById("phone");
        // phone.value = this.detailData.phone;
        // const streetname = <HTMLInputElement>document.getElementById("streetname");
        // streetname.value = this.detailData.addressStreet.streetName;
        // const streetnumber = <HTMLInputElement>document.getElementById("streetnumber");
        // streetnumber.value = this.detailData.addressStreet.streetNumber;
        // const zip = <HTMLInputElement>document.getElementById("zip");
        // zip.value = this.detailData.addressLocation.zipCode;
        // const state = <HTMLInputElement>document.getElementById("state");
        // state.value = this.detailData.addressLocation.state;
        // const city = <HTMLInputElement>document.getElementById("city");
        // city.value = this.detailData.addressLocation.city;
        // const extras = document.getElementById("extras") as HTMLSelectElement;
        // extras.setAttribute('multiple', 'true');
        // extras.style.setProperty('width', '15%');
        // extraOptions.forEach(extoption => {
        //     let opt = document.createElement('option');
        //     opt.value = extoption.value;
        //     opt.id = extoption.value;
        //     opt.textContent = extoption.viewValue;
        //     if(this.detailData.extras && this.detailData.extras.length > 0){
        //         const foundExtra = this.detailData.extras.find((extra: string) => extra === extoption.value);
        //         if(foundExtra){
        //             opt.setAttribute("selected","selected");
        //         }
        //     }
        //     extras.appendChild(opt);
        // })
        // const payment = <HTMLInputElement>document.getElementById(this.detailData.payment);
        // payment.setAttribute("checked","checked");
        // const note = <HTMLInputElement>document.getElementById("note");
        // note.value = this.detailData.note;
        // const tags = <HTMLInputElement>document.getElementById("tags");
        // tags.value = this.detailData.tags;
        // const reminder = <HTMLInputElement>document.getElementById("reminder");
        // if(this.detailData.reminder){
        //     reminder.setAttribute("checked","checked");
        // }else{
        //     reminder.removeAttribute("checked");
        // }
        // const newsletter = <HTMLInputElement>document.getElementById("newsletter");
        // if(this.detailData.newsletter){
        //     newsletter.setAttribute("checked","checked");
        // }else{
        //     newsletter.removeAttribute("checked");
        // }
        // const confirm = <HTMLInputElement>document.getElementById("confirm");
        // if(this.detailData.confirm){
        //     confirm.setAttribute("checked","checked");
        // }else{
        //     confirm.removeAttribute("checked");
        // }
        //container.style.display = "block";
        this.buildDialogMDC(container);
    }
    buildDialogMDC(ele) {
        NewMdcDialog();
    }
}
/* html code for extras
<option value="extraBreakfast" id="extraBreakfast">Breakfast</option>
                    <option value="extraTV" id="extraTV">TV</option>
                    <option value="extraWiFi" id="extraWiFi">WiFi</option>
                    <option value="extraParking" id="extraParking">Parking</option>
                    <option value="extraBalcony" id="extraBalcony">Balcony</option> */ 
//# sourceMappingURL=idm-details-dialog.js.map