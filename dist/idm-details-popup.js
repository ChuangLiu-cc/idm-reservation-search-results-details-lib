export class DetailsPopup {
    constructor(tagid, data) {
        this.detailData = data;
        this.tagid = tagid;
        const queryValue = "#" + tagid;
        const container = document.querySelector(queryValue);
        this.popupDetailsDialog(container);
    }
    popupDetailsDialog(container) {
        //load data in dialog
        if (container.firstChild)
            container.removeChild(container.firstChild);
        let dialogDiv = document.createElement('div');
        dialogDiv.innerHTML = `
        <div>
            <div>
                <form>
                    <input  type="date" id="arrival">
                    <input  type="date" id="departure">
                </form>
            </div>
            <div>
                <form>
                <select name="roomsize" id="roomsize">
                        <option value="business-suite">Business Suite</option>
                        <option value="presidential-suite">Presidential Suite</option>
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
                <input type="radio" id="creditcard" value="cc">
                <label for="creditcard">HTML</label>
                <input type="radio" id="paypal" value="pp">
                <label for="paypal">PayPal</label>
                <input type="radio" id="cash" value="cash">
                <label for="cash">Cash</label>
                <input type="radio" id="bitcoin" value="bc">
                <label for="bitcoin">Bitcoin</label>
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
                <mat-slide-toggle [(ngModel)]="data.reminder">Send me a reminder</mat-slide-toggle>
                <mat-slide-toggle [(ngModel)]="data.newsletter">Subscribe to newsletter</mat-slide-toggle>
                <br>
                <input type="checkbox" id="confirm" />I confirm the information given above
            </div>
        </div>
        `;
        dialogDiv.id = "popup-dialog";
        container === null || container === void 0 ? void 0 : container.appendChild(dialogDiv);
        let num1LineDiv = document.createElement('div');
        num1LineDiv.id = "num-1-line";
        let num1LineForm = document.createElement('form');
        num1LineForm.id = "num-1-line-form";
        let num2LineDiv = document.createElement('div');
        let num3LineDiv = document.createElement('div');
        let num4LineDiv = document.createElement('div');
        let num5LineDiv = document.createElement('div');
        let num6LineDiv = document.createElement('div');
        let num7LineDiv = document.createElement('div');
        let num8LineDiv = document.createElement('div');
        let num9LineDiv = document.createElement('div');
        let num10LineDiv = document.createElement('div');
        let num11LineDiv = document.createElement('div');
        let num12LineDiv = document.createElement('div');
        let num13LineDiv = document.createElement('div');
    }
}
//# sourceMappingURL=idm-details-popup.js.map