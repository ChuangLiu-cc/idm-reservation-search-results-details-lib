export class DetailsPopup {
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
        const formContainerDiv = document.createElement('div');
        formContainerDiv.setAttribute("id", "form-container");
        formContainerDiv.style.setProperty("padding", "25px");
        formContainerDiv.style.setProperty("box-shadow", "0 2px 5px #f5f5f5");
        formContainerDiv.style.setProperty("background", "#eee");
        formContainerDiv.innerHTML = `
            <div>
                <form>
                    <input  type="date" id="arrival">
                    <input  type="date" id="departure">
                </form>
            </div>
            <div>
                <form>
                    <select name="roomsize" id="roomsize">
                        <option value="business-suite" id="business-suite">Business Suite</option>
                        <option value="presidential-suite" id="presidential-suite">Presidential Suite</option>
                    </select>
                </form>
                <form>
                    <input type="number"  max="5" min="1" id="roomquantity">
                </form>
            </div>
            <div>
                <form>
                    <input type="text" name="firstname" id="firstname" />
                </form>
            </div>
            <div>
                <form>
                    <input type="text" name="lastname" id="lastname" />
                </form>
            </div>
            <div>
                <form>
                    <input type="email" id="email">
                </form>
            </div>
            <div>
                <form>
                    <input type="tel"  id="phone" >
                </form>
            </div>
            <div>
                <form>
                    <input type="text" id="streetname">
                </form>
                <form>
                    <input type="number" id="streetnumber" >
                </form>
            </div>
            <div>
                <form>
                    <input type="text" id="zip">
                </form>
                <form>
                    <input type="text" id="state">
                </form>
                <form>
                    <input type="text" id="city" >
                </form>
            </div>
            <div>
                <select name="extras" id="extras">
                    <option value="extraBreakfast">Breakfast</option>
                    <option value="extraTV">TV</option>
                    <option value="extraWiFi">WiFi</option>
                    <option value="extraParking">Parking</option>
                    <option value="extraBalcony">Balcony</option>
                </select>
            </div>
            <div>
                <form>
                    <input type="radio" id="cc" value="cc">
                    <label for="cc">Credit Card</label>
                    <input type="radio" id="pp" value="pp">
                    <label for="pp">PayPal</label>
                    <input type="radio" id="cash" value="cash">
                    <label for="cash">Cash</label>
                    <input type="radio" id="bc" value="bc">
                    <label for="bc">Bitcoin</label>
                </form>
            </div>
            <br>
            <div>
                <form>
                    <label>Personal Note</label>
                    <input type="text" id="note" >
                </form>
            </div>
            <div>
                <form class="tag-list" >
                    <label>Tags</label>
                    <input type="text" id="tags" >
                </form>
            </div>
            <div>
                <label class="switch">
                    <input type="checkbox" id="reminder">
                    Send me a reminder
                    <span class="slider round"></span>
                </label>
                <label class="switch">
                    <input type="checkbox" id="newsletter">
                    Subscribe to newsletter
                    <span class="slider round"></span>
                </label>
                <br>
                <input type="checkbox" id="confirm" />I confirm the information given above
            </div>
        `;
        const dialogContainerDiv = document.createElement('div');
        dialogContainerDiv.setAttribute("id", "dialog-container");
        dialogContainerDiv.style.setProperty("margin", "50px auto");
        dialogContainerDiv.style.setProperty("border", "1px solid #999");
        dialogContainerDiv.style.setProperty("width", "60%");
        dialogContainerDiv === null || dialogContainerDiv === void 0 ? void 0 : dialogContainerDiv.appendChild(formContainerDiv);
        container === null || container === void 0 ? void 0 : container.appendChild(dialogContainerDiv);
        const arrival = document.getElementById("arrival");
        arrival.valueAsDate = new Date(this.detailData.stay.arrivalDate); //new Date().toLocaleDateString();
        const departure = document.getElementById("departure");
        departure.valueAsDate = new Date(this.detailData.stay.departureDate); //new Date().toLocaleDateString();
        const roomsize = document.getElementById(this.detailData.room.roomSize);
        roomsize.setAttribute("selected", "selected");
        const roomquantity = document.getElementById("roomquantity");
        roomquantity.value = this.detailData.room.roomQuantity;
        const firstname = document.getElementById("firstname");
        firstname.value = this.detailData.firstName;
        const lastname = document.getElementById("lastname");
        lastname.value = this.detailData.lastName;
        const email = document.getElementById("email");
        email.value = this.detailData.email;
        const phone = document.getElementById("phone");
        phone.value = this.detailData.phone;
        const streetname = document.getElementById("streetname");
        streetname.value = this.detailData.addressStreet.streetName;
        const streetnumber = document.getElementById("streetnumber");
        streetnumber.value = this.detailData.addressStreet.streetNumber;
        const zip = document.getElementById("zip");
        zip.value = this.detailData.addressLocation.zipCode;
        const state = document.getElementById("state");
        state.value = this.detailData.addressLocation.state;
        const city = document.getElementById("city");
        city.value = this.detailData.addressLocation.city;
        const extras = document.getElementById("extras");
        extras.setAttribute("value", this.detailData.extras);
        const payment = document.getElementById(this.detailData.payment);
        payment.setAttribute("checked", "checked");
        const note = document.getElementById("note");
        note.value = this.detailData.note;
        const tags = document.getElementById("tags");
        tags.value = this.detailData.tags;
        const reminder = document.getElementById("reminder");
        if (this.detailData.reminder) {
            reminder.setAttribute("checked", "checked");
        }
        else {
            reminder.removeAttribute("checked");
        }
        const newsletter = document.getElementById("newsletter");
        if (this.detailData.newsletter) {
            newsletter.setAttribute("checked", "checked");
        }
        else {
            newsletter.removeAttribute("checked");
        }
        const confirm = document.getElementById("confirm");
        if (this.detailData.confirm) {
            confirm.setAttribute("checked", "checked");
        }
        else {
            confirm.removeAttribute("checked");
        }
        container.style.display = "block";
    }
}
//# sourceMappingURL=idm-details-popup.js.map