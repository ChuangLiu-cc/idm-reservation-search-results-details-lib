
export class DetailsPopup{
    detailData: any;
    tagid: string;

    constructor(tagid: string, data: any){
        this.detailData = data;
        this.tagid = tagid;
        const queryValue = "#" + tagid;
        const container = document.querySelector(queryValue)! as HTMLElement;
        container.style.setProperty('display','none');
        container.style.setProperty('position','fixed');
        container.style.setProperty('z-index','8');
        container.style.setProperty('left','0');
        container.style.setProperty('top','0');
        container.style.setProperty('width','100%');
        container.style.setProperty('height','100%');
        container.style.setProperty('overflow','auto');
        container.style.setProperty('background-color','rgb(0, 0, 0)');
        container.style.setProperty('background-color','rgba(0, 0, 0, 0.4)');

        this.popupDetailsDialog(container);
        //use container div to close popup form
        container.addEventListener('click', (e: Event) => {
            e.preventDefault();
            const clickPopup = new CustomEvent('clickPopup', {detail: e.target});
            window.dispatchEvent(clickPopup);
        })

    };
    popupDetailsDialog(container: any){
        //check popup container and display none => block to show in UI
        if(container.firstChild) container.removeChild(container.firstChild);
        const extraOptions = [
            {value:"extraBreakfast",viewValue:"Breakfast" },
            {value:"extraTV",viewValue:"TV"},
            {value:"extraWiFi",viewValue:"WiFi"},
            {value:"extraParking",viewValue:"Parking"},
            {value:"extraBalcony",viewValue:"Balcony"}
        ];
        const formContainerDiv = document.createElement('div');
        formContainerDiv.setAttribute("id", "form-container");
        formContainerDiv.style.setProperty("padding", "25px");
        formContainerDiv.style.setProperty("box-shadow","0 2px 5px #f5f5f5");
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
        `
        const dialogContainerDiv = document.createElement('div');
        dialogContainerDiv.setAttribute("id", "dialog-container");
        dialogContainerDiv.style.setProperty("margin", "50px auto");
        dialogContainerDiv.style.setProperty("border","1px solid #999");
        dialogContainerDiv.style.setProperty("width", "60%");
        dialogContainerDiv?.appendChild(formContainerDiv);
        container?.appendChild(dialogContainerDiv);
        const arrival = <HTMLInputElement>document.getElementById("arrival");
        arrival.valueAsDate  = new Date(this.detailData.stay.arrivalDate); //new Date().toLocaleDateString();
        const departure = <HTMLInputElement>document.getElementById("departure");
        departure.valueAsDate = new Date(this.detailData.stay.departureDate); //new Date().toLocaleDateString();
        const roomsize = <HTMLInputElement>document.getElementById(this.detailData.room.roomSize);
        roomsize.setAttribute("selected","selected");
        const roomquantity = <HTMLInputElement>document.getElementById("roomquantity");
        roomquantity.value = this.detailData.room.roomQuantity;
        const firstname = <HTMLInputElement>document.getElementById("firstname");
        firstname.value = this.detailData.firstName;
        const lastname = <HTMLInputElement>document.getElementById("lastname");
        lastname.value = this.detailData.lastName;
        const email = <HTMLInputElement>document.getElementById("email");
        email.value = this.detailData.email;
        const phone = <HTMLInputElement>document.getElementById("phone");
        phone.value = this.detailData.phone;
        const streetname = <HTMLInputElement>document.getElementById("streetname");
        streetname.value = this.detailData.addressStreet.streetName;
        const streetnumber = <HTMLInputElement>document.getElementById("streetnumber");
        streetnumber.value = this.detailData.addressStreet.streetNumber;
        const zip = <HTMLInputElement>document.getElementById("zip");
        zip.value = this.detailData.addressLocation.zipCode;
        const state = <HTMLInputElement>document.getElementById("state");
        state.value = this.detailData.addressLocation.state;
        const city = <HTMLInputElement>document.getElementById("city");
        city.value = this.detailData.addressLocation.city;
        const extras = document.getElementById("extras") as HTMLSelectElement;
        extras.setAttribute('multiple', 'true');
        extras.style.setProperty('width', '15%');
        extraOptions.forEach(extoption => {
            let opt = document.createElement('option');
            opt.value = extoption.value;
            opt.id = extoption.value;
            opt.textContent = extoption.viewValue;
            if(this.detailData.extras && this.detailData.extras.length > 0){
                const foundExtra = this.detailData.extras.find((extra: string) => extra === extoption.value);
                if(foundExtra){
                    opt.setAttribute("selected","selected");
                }
            }
            extras.appendChild(opt);
        })
        
        
        const payment = <HTMLInputElement>document.getElementById(this.detailData.payment);
        payment.setAttribute("checked","checked");
        const note = <HTMLInputElement>document.getElementById("note");
        note.value = this.detailData.note;
        const tags = <HTMLInputElement>document.getElementById("tags");
        tags.value = this.detailData.tags;
        const reminder = <HTMLInputElement>document.getElementById("reminder");
        if(this.detailData.reminder){
            reminder.setAttribute("checked","checked");
        }else{
            reminder.removeAttribute("checked");
        }
        const newsletter = <HTMLInputElement>document.getElementById("newsletter");
        if(this.detailData.newsletter){
            newsletter.setAttribute("checked","checked");
        }else{
            newsletter.removeAttribute("checked");
        }
        const confirm = <HTMLInputElement>document.getElementById("confirm");
        if(this.detailData.confirm){
            confirm.setAttribute("checked","checked");
        }else{
            confirm.removeAttribute("checked");
        }
        container.style.display = "block";
    }
        
}
    
/* html code for extras
<option value="extraBreakfast" id="extraBreakfast">Breakfast</option>
                    <option value="extraTV" id="extraTV">TV</option>
                    <option value="extraWiFi" id="extraWiFi">WiFi</option>
                    <option value="extraParking" id="extraParking">Parking</option>
                    <option value="extraBalcony" id="extraBalcony">Balcony</option> */