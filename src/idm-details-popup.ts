import {NewMdcSelectComponent,NewMdcCheckbox, NewMdcChips,NewMdcTextHelperText, NewMdcButton, NewMdcSelect, NewMdcTextField, NewMdcSelectHelperText, NewMdcTextCounter, NewMdcMenus, NewMdcRadioButtonFormField, NewMdcRadioButton, NewMdcSwitch} from './mdc-builder'

export class DetailsPopup{
    detailData: any;
    tagid: string;
    roomsize_selected: any;
    extras_selected: any;
    payments_value:  Array<string>;

    constructor(tagid: string, data: any){
        this.payments_value = ['cc','pp','cash','bc'];
        this.roomsize_selected = "";
        this.extras_selected = [];
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
        formContainerDiv.style.setProperty(" width", "100%");
        formContainerDiv.style.setProperty("padding", "10px");
        formContainerDiv.style.setProperty("border","none");
        //formContainerDiv.style.setProperty("background","#1c87c9");
        //formContainerDiv.style.setProperty("font-size","16px");
        //formContainerDiv.style.setProperty("font-weight","400");
        //formContainerDiv.style.setProperty("color","#fff");

        formContainerDiv.style.setProperty("box-shadow","0 2px 5px #f5f5f5");
        formContainerDiv.style.setProperty("background", "#eee");

        // <form>
        //             <input type="date" name="arrival" id="arrival"/>
        //             <label for="arrival" id="arrival-datepicker-label">Arrival Date</label>
        //             <input type="date" name="departure" id="departure"/>
        //             <label for="departure" id="departure-datepicker-label">Departure Date</label>
        //         </form>
        //<input type="text" name="lastname" id="lastname-dialog" />
        // <select name="extras" id="extras-dialog">
                    
        // </select>

        // <form>
        //             <input type="radio" id="cc-dialog" value="cc">
        //             <label for="cc">Credit Card</label>
        //             <input type="radio" id="pp-dialog" value="pp">
        //             <label for="pp">PayPal</label>
        //             <input type="radio" id="cash-dialog" value="cash">
        //             <label for="cash">Cash</label>
        //             <input type="radio" id="bc-dialog" value="bc">
        //             <label for="bc">Bitcoin</label>
        //         </form>
        formContainerDiv.innerHTML = `
            <div id="datepicker-dialog">
                <div id="arrivaldiv">
                    <input type="date" name="arrival-dialog" id="arrival-dialog"/>
                    <label for="arrival-dialog" id="arrival-datepicker-label-dialog">Arrival Date</label>
                </div>
                <div id="departurediv">
                    <input type="date" name="departure-dialog" id="departure-dialog"/>
                    <label for="departure-dialog" id="departure-datepicker-label-dialog">Departure Date</label>
                </div>
            </div>
            <br />
            <div id="roomgroup-dialog">
                <div id="roomsizediv">
                    <div class="roomsize-dialog mdc-select">
                        <div class="mdc-select__anchor"
                            role="button"
                            aria-controls="roomsize-helper-text"
                            aria-describedby="roomsize-helper-text">
                            <i class="mdc-select__dropdown-icon"></i>
                            <div class="mdc-select__selected-text" id="roomsize-dialog"></div>
                            <span class="mdc-floating-label">Room Size</span>
                            <span class="mdc-line-ripple"></span>
                        </div>
                        <div class="mdc-select__menu mdc-menu mdc-menu-surface">
                            <ul class="mdc-list">
                                <li class="mdc-list-item" data-value="business-suite" id="business-suite-dialog" >
                                <span class="mdc-list-item__text">
                                    Business Suite
                                </span
                                </li>
                                <li class="mdc-list-item" data-value="presidential-suite" id="presidential-suite-dialog">
                                <span class="mdc-list-item__text">
                                    Presidential Suite
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p id="roomsize-helper-text" class="mdc-select-helper-text">Choose a room type</p>
                </div>
                <div id="roomquantitydiv">
                    <div class="roomquantity-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="roomquantity-dialog">Room Quantity</span>
                        <input class="mdc-text-field__input" type="text" max="5" min="1" 
                        id="roomquantityinput-dialog" 
                        aria-controls="roomquantity-dialog-helper"
                        aria-describedby="roomquantity-dialog-helper" 
                        aria-labelledby="roomquantity-dialog">
                        <span class="mdc-line-ripple"></span>
                    </div>
                    <div class="mdc-text-field-helper-line">
                        <div class="mdc-text-field-helper-text" id="roomquantity-dialog-helper">Maximum: 5</div>
                    </div>
                </div>
            </div>
            <br />
            <div id="namegroup-dialog">
                <div id="firstnamediv">
                    <label class="firstname-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="firstname-dialog">First Name</span>
                        <input class="mdc-text-field__input" type="text" id="firstname-dialog-input" maxlength="50" 
                        aria-labelledby="firstname-dialog" >
                        <span class="mdc-line-ripple"></span>
                    </label>
                    <div class="mdc-text-field-helper-line">
                        <div id="firstname-dialog-counter" class="mdc-text-field-character-counter">0 / 50</div>
                    </div>
                </div>
                <div id="lastnamediv">
                    <label class="lastname-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="lastname-dialog">Last Name</span>
                        <input class="mdc-text-field__input" type="text" id="lastname-dialog-input" maxlength="50" 
                        aria-labelledby="lastname-dialog" >
                        <span class="mdc-line-ripple"></span>
                    </label>
                    <div class="mdc-text-field-helper-line">
                        <div id="lastname-dialog-counter" class="mdc-text-field-character-counter">0 / 50</div>
                    </div>
                </div>
            </div>
            <div id="emailphonegroup-dialog">
                <div id="emaildiv">
                    <label class="email-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="email-dialog">E-mail</span>
                        <input class="mdc-text-field__input" type="email" id="email-dialog-input" aria-labelledby="email-dialog">
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div id="phonediv">
                    <label class="phone-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="phone-dialog">Phone Number</span>
                        <input class="mdc-text-field__input" type="tel" id="phone-dialog-input" aria-labelledby="phone-dialog">
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
            </div>
            <br />
            <div id="addressgroup-dialog">
                <div id="streetnamediv">
                    <label class="streetname-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="streetname-dialog">Street Name</span>
                        <input class="mdc-text-field__input" type="text" id="streetname-dialog-input" aria-labelledby="streetname-dialog">
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div id="streetnumberdiv">
                    <label class="streetnumber-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="streetnumber-dialog">Street Number</span>
                        <input class="mdc-text-field__input" type="text" id="streetnumber-dialog-input" aria-labelledby="streetnumber-dialog">
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div id="zipdiv">
                    <label class="zip-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="zip-dialog">ZIP</span>
                        <input class="mdc-text-field__input" type="text" id="zip-dialog-input" aria-labelledby="zip-dialog">
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div id="statediv">
                    <label class="state-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="state-dialog">State</span>
                        <input class="mdc-text-field__input" type="text" id="state-dialog-input" aria-labelledby="state-dialog">
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
                <div id="citydiv">
                    <label class="city-dialog mdc-text-field mdc-text-field--filled">
                        <span class="mdc-text-field__ripple"></span>
                        <span class="mdc-floating-label" id="city-dialog">City</span>
                        <input class="mdc-text-field__input" type="text" id="city-dialog-input" aria-labelledby="city-dialog">
                        <span class="mdc-line-ripple"></span>
                    </label>
                </div>
            </div>
            <br />
            <div id="extrasdiv">
                <label for="extras">Extras</label>
                <select name="extras" id="extras-dialog">
                            
                </select>
            </div>
            <br />
            <div id="payment-dialog">
                <div class="cc-form-field mdc-form-field">
                    <div class="cc-radio mdc-radio">
                        <input class="mdc-radio__native-control" type="radio" id="cc" name="cc" value="cc">
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    <label for="cc">Credit Card</label>
                </div>
                <div class="pp-form-field mdc-form-field">
                    <div class="pp-radio mdc-radio">
                        <input class="mdc-radio__native-control" type="radio" id="pp" name="pp" value="pp">
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    <label for="pp">PayPal</label>
                </div>
                <div class="cash-form-field mdc-form-field">
                    <div class="cash-radio mdc-radio">
                        <input class="mdc-radio__native-control" type="radio" id="cash" name="cash" value="cash">
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    <label for="cash">Cash</label>
                </div>
                <div class="bc-form-field mdc-form-field">
                    <div class="bc-radio mdc-radio">
                        <input class="mdc-radio__native-control" type="radio" id="bc" name="bc" value="bc">
                        <div class="mdc-radio__background">
                            <div class="mdc-radio__outer-circle"></div>
                            <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    <label for="bc">Bitcoin</label>
                </div>
            </div>
            <br>
            <div id="notediv">
                <label class="note-dialog mdc-text-field mdc-text-field--filled">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label" id="note-dialog">Personal Note</span>
                    <input class="mdc-text-field__input" type="text" id="note-dialog-input" aria-labelledby="note-dialog">
                    <span class="mdc-line-ripple"></span>
                </label>
            </div>
            <br />
            <div id="chipsdiv">
                <label class="chips-dialog mdc-text-field mdc-text-field--filled">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label" id="chips-dialog">Tags</span>
                    <input class="mdc-text-field__input" type="text" id="tags-dialog" aria-labelledby="chips-dialog">
                    <span class="mdc-line-ripple"></span>
                </label>
            </div>
            <br />
            <div id="reminderdiv">
                <button id="reminder-switch" class="mdc-switch mdc-switch--unselected" type="button" role="switch">
                    <div class="mdc-switch__track"></div>
                    <div class="mdc-switch__handle-track">
                        <div class="mdc-switch__handle">
                            <div class="mdc-switch__shadow">
                                <div class="mdc-elevation-overlay"></div>
                            </div>
                            <div class="mdc-switch__ripple"></div>
                            <div class="mdc-switch__icons">
                                <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
                                    <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                                </svg>
                                <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
                                    <path d="M20 13H4v-2h16v2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </button>
                <label for="basic-switch">Send me a reminder</label>
            </div>
            <br />
            <div id="newsletterdiv">
                <button id="newsletter-switch" class="mdc-switch mdc-switch--unselected" type="button" role="switch">
                    <div class="mdc-switch__track"></div>
                    <div class="mdc-switch__handle-track">
                        <div class="mdc-switch__handle">
                            <div class="mdc-switch__shadow">
                                <div class="mdc-elevation-overlay"></div>
                            </div>
                            <div class="mdc-switch__ripple"></div>
                            <div class="mdc-switch__icons">
                                <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
                                    <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                                </svg>
                                <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
                                    <path d="M20 13H4v-2h16v2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </button>
                <label for="basic-switch">Subscribe to newsletter</label>
            </div>
            <br />
            <div id="confirmdiv">
                <div class="checkbox-form mdc-form-field">
                    <div class="mdc-checkbox">
                        <input type="checkbox"
                                class="mdc-checkbox__native-control"
                                id="confirm-checkbox"/>
                        <div class="mdc-checkbox__background">
                            <svg class="mdc-checkbox__checkmark"
                                viewBox="0 0 24 24">
                            <path class="mdc-checkbox__checkmark-path"
                                    fill="none"
                                    d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                            </svg>
                            <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                        <div class="mdc-checkbox__ripple"></div>
                    </div>
                    <label for="confirm-checkbox">I confirm the information given above</label>
                </div>
            </div>

        `
        const dialogContainerDiv = document.createElement('div');
        dialogContainerDiv.setAttribute("id", "dialog-container");
        dialogContainerDiv.style.setProperty("margin", "50px auto");
        dialogContainerDiv.style.setProperty("border","1px solid #999");
        dialogContainerDiv.style.setProperty("width", "60%");
        dialogContainerDiv?.appendChild(formContainerDiv);
        container?.appendChild(dialogContainerDiv);

        //set default values from json file
        //set each element
        //datepickers group
        const datepickerDialog = <HTMLDivElement>document.getElementById("datepicker-dialog");
        datepickerDialog.style.setProperty("display","flex");
        datepickerDialog.style.setProperty("padding-top","30px");
        //arrival datepicker
        const arrivalDiv = <HTMLDivElement>document.getElementById("arrivaldiv");
        arrivalDiv.style.setProperty("padding","5px");
        //departure datepicker
        const departureDiv = <HTMLDivElement>document.getElementById("departurediv");
        departureDiv.style.setProperty("padding","5px");
        //room size 
        const roomsizeDiv = <HTMLDivElement>document.getElementById("roomsizediv");
        roomsizeDiv.style.setProperty("padding","5px");
        //room quantity
        const roomquantityDiv = <HTMLDivElement>document.getElementById("roomquantitydiv");
        roomquantityDiv.style.setProperty("padding","5px");
        //first name
        const firstnameDiv = <HTMLDivElement>document.getElementById("firstnamediv");
        firstnameDiv.style.setProperty("padding","5px");
        //last name
        const lastnameDiv = <HTMLDivElement>document.getElementById("lastnamediv");
        lastnameDiv.style.setProperty("padding","5px");
        //email
        const emailDiv = <HTMLDivElement>document.getElementById("emaildiv");
        emailDiv.style.setProperty("padding","5px");
        //phone
        const phoneDiv = <HTMLDivElement>document.getElementById("phonediv");
        phoneDiv.style.setProperty("padding","5px");
        //streetname
        const streetnameDiv = <HTMLDivElement>document.getElementById("streetnamediv");
        streetnameDiv.style.setProperty("padding","5px");
        //streetnumber
        const streetnumberDiv = <HTMLDivElement>document.getElementById("streetnumberdiv");
        streetnumberDiv.style.setProperty("padding","5px");
        //zip
        const zipDiv = <HTMLDivElement>document.getElementById("zipdiv");
        zipDiv.style.setProperty("padding","5px");
        //state
        const stateDiv = <HTMLDivElement>document.getElementById("statediv");
        stateDiv.style.setProperty("padding","5px");
        //city
        const cityDiv = <HTMLDivElement>document.getElementById("citydiv");
        cityDiv.style.setProperty("padding","5px");
        const extrasDiv = <HTMLDivElement>document.getElementById("extrasdiv");
        extrasDiv.style.setProperty("padding","5px");
        extrasDiv.style.setProperty("text-align","left");
        const noteDiv = <HTMLDivElement>document.getElementById("notediv");
        noteDiv.style.setProperty("padding","5px");
        noteDiv.style.setProperty("text-align","left");
        const chipsDiv = <HTMLDivElement>document.getElementById("chipsdiv");
        chipsDiv.style.setProperty("padding","5px");
        chipsDiv.style.setProperty("text-align","left");
        const reminderDiv = <HTMLDivElement>document.getElementById("reminderdiv");
        reminderDiv.style.setProperty("padding","5px");
        reminderDiv.style.setProperty("text-align","left");
        const newsletterDiv = <HTMLDivElement>document.getElementById("newsletterdiv");
        newsletterDiv.style.setProperty("padding","5px");
        newsletterDiv.style.setProperty("text-align","left");
        const confirmDiv = <HTMLDivElement>document.getElementById("confirmdiv");
        confirmDiv.style.setProperty("padding","5px");
        confirmDiv.style.setProperty("text-align","left");

        




        //set each group styles in dialog and valus

        //datepickers
        const arrival = <HTMLInputElement>document.getElementById("arrival-dialog");
        arrival.value  = new Date(this.detailData.stay.arrivalDate).toISOString().split('T')[0]; //new Date().toLocaleDateString();
        arrival.style.setProperty("padding-top","20px");
        arrival.style.setProperty("width","220px");
        const arrivalDatepickerLabelDialog = <HTMLInputElement>document.getElementById("arrival-datepicker-label-dialog");
        arrivalDatepickerLabelDialog.style.setProperty("display","block");
        const departureDatepickerLabelDialog = <HTMLInputElement>document.getElementById("departure-datepicker-label-dialog");
        departureDatepickerLabelDialog.style.setProperty("display","block");
        //make datepicker live???
        // arrival.addEventListener('focusin', (e: Event) => {
        //     e.preventDefault();
        //     //make a datepicker
        // })
        const departure = <HTMLInputElement>document.getElementById("departure-dialog");
        departure.value = new Date(this.detailData.stay.departureDate).toISOString().split('T')[0]; //new Date().toLocaleDateString();
        departure.style.setProperty("padding-top","20px");
        departure.style.setProperty("width","220px");
        //room
        const roomgroupDialog = <HTMLDivElement>document.getElementById("roomgroup-dialog");
        roomgroupDialog.style.setProperty("display","flex");
        const roomquantity = <HTMLInputElement>document.getElementById("roomquantityinput-dialog");
        roomquantity.value = this.detailData.room.roomQuantity;
        //name
        const namegroupDialog = <HTMLDivElement>document.getElementById("namegroup-dialog");
        namegroupDialog.style.setProperty("display","flex");
        const firstname = <HTMLInputElement>document.getElementById("firstname-dialog-input");
        firstname.value = this.detailData.firstName;
        const lastname = <HTMLInputElement>document.getElementById("lastname-dialog-input");
        lastname.value = this.detailData.lastName;
        //email & phone
        const emailphonegroupDialog = <HTMLDivElement>document.getElementById("emailphonegroup-dialog");
        emailphonegroupDialog.style.setProperty("display","flex");
        const email = <HTMLInputElement>document.getElementById("email-dialog-input");
        email.value = this.detailData.email;
        const phone = <HTMLInputElement>document.getElementById("phone-dialog-input");
        phone.value = this.detailData.phone;
        //street name, street number, zip, state, city
        const addressgroupDialog = <HTMLDivElement>document.getElementById("addressgroup-dialog");
        addressgroupDialog.style.setProperty("display","flex");
        const streetname = <HTMLInputElement>document.getElementById("streetname-dialog-input");
        streetname.value = this.detailData.addressStreet.streetName;
        const streetnumber = <HTMLInputElement>document.getElementById("streetnumber-dialog-input");
        streetnumber.value = this.detailData.addressStreet.streetNumber;
        const zip = <HTMLInputElement>document.getElementById("zip-dialog-input");
        zip.value = this.detailData.addressLocation.zipCode;
        const state = <HTMLInputElement>document.getElementById("state-dialog-input");
        state.value = this.detailData.addressLocation.state;
        const city = <HTMLInputElement>document.getElementById("city-dialog-input");
        city.value = this.detailData.addressLocation.city;
        //extras
        const extrasSelect = <HTMLMenuElement>document.getElementById("extras-dialog");
        extrasSelect.textContent = this.detailData.extras;

        //payment
        const paymentGroup = <HTMLDivElement>document.getElementById("payment-dialog");
        paymentGroup.style.setProperty("display","flex");
        const payment = <HTMLButtonElement>document.getElementById(this.detailData.payment);
        payment.setAttribute("checked","checked");



        //old code for old extras select button
        const extras = document.getElementById("extras-dialog") as HTMLSelectElement;
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
        
        
        const note = <HTMLInputElement>document.getElementById("note-dialog-input");
        note.value = this.detailData.note;
        const tags = <HTMLInputElement>document.getElementById("tags-dialog");
        tags.value = this.detailData.tags;
        // const reminder = <HTMLInputElement>document.getElementById("reminder-switch");
        // if(this.detailData.reminder){
        //     reminder.setAttribute("selected","true");
        // }else{
        //     reminder.removeAttribute("selected");
        // }
        // const newsletter = <HTMLInputElement>document.getElementById("newsletter-switch");
        // if(this.detailData.newsletter){
        //     newsletter.setAttribute("selected","true");
        // }else{
        //     newsletter.removeAttribute("selected");
        // }
        const confirm = <HTMLInputElement>document.getElementById("confirm-checkbox");
        if(this.detailData.confirm){
            confirm.setAttribute("checked","checked");
        }else{
            confirm.removeAttribute("checked");
        }
        container.style.display = "block";
        this.buildMDC();
        const radioButtonControllers = document.querySelectorAll('.mdc-radio__native-control');
        for(let rbc of radioButtonControllers){
            rbc.addEventListener('click',(e: Event) => {
                e.preventDefault();
                //this.initRadioButtonGroup();
                //this.checkedSelectRadioButton(e);
            })
        }
    }
    initRadioButtonGroup(){
        for(let p of this.payments_value){
            const payment = <HTMLButtonElement>document.getElementById(p);
            payment.removeAttribute("checked");
        }
    }
    checkedSelectRadioButton(event: any){
        const paymentSelected = <HTMLButtonElement>document.getElementById(event.currentTarget.value);
        paymentSelected.setAttribute("checked","checked");
    }
    buildMDC(){
        NewMdcSelectComponent(document.querySelector('.roomsize-dialog'), this.detailData.room.roomSize);
        NewMdcTextHelperText(document.querySelector('#roomquantity-dialog-helper'));
        NewMdcTextField(document.querySelector('.roomquantity-dialog'));
        NewMdcSelectHelperText(document.querySelector('#roomsize-helper-text'));

        NewMdcTextField(document.querySelector('.firstname-dialog'));
        NewMdcTextCounter(document.querySelector('#firstname-dialog-counter'));
        NewMdcTextField(document.querySelector('.lastname-dialog'));
        NewMdcTextCounter(document.querySelector('#lastname-dialog-counter'));

        NewMdcTextField(document.querySelector('.email-dialog'));
        NewMdcTextField(document.querySelector('.phone-dialog'));
        NewMdcTextField(document.querySelector('.streetname-dialog'));
        NewMdcTextField(document.querySelector('.streetnumber-dialog'));
        NewMdcTextField(document.querySelector('.zip-dialog'));
        NewMdcTextField(document.querySelector('.state-dialog'));
        NewMdcTextField(document.querySelector('.city-dialog'));

        //NewMdcMenus(document.querySelector('.mdc-menu'));
        NewMdcRadioButtonFormField(document.querySelector('.cc-radio'), document.querySelector('.cc-form-field'));
        NewMdcRadioButtonFormField(document.querySelector('.pp-radio'),document.querySelector('.pp-form-field'));
        NewMdcRadioButtonFormField(document.querySelector('.cash-radio'),document.querySelector('.cash-form-field'));
        NewMdcRadioButtonFormField(document.querySelector('.bc-radio'),document.querySelector('.bc-form-field'));

        NewMdcTextField(document.querySelector('.note-dialog'));
        NewMdcTextField(document.querySelector('.chips-dialog'));

        //NewMdcSwitch();
        NewMdcSwitch(document.querySelector('#reminder-switch'),this.detailData.reminder);
        NewMdcSwitch(document.querySelector('#newsletter-switch'),this.detailData.newsletter);

        NewMdcCheckbox(document.querySelector('.checkbox-form'), document.querySelector('.mdc-form-field'));

    }
        
}
    
/* html code for extras
<option value="extraBreakfast" id="extraBreakfast">Breakfast</option>
                    <option value="extraTV" id="extraTV">TV</option>
                    <option value="extraWiFi" id="extraWiFi">WiFi</option>
                    <option value="extraParking" id="extraParking">Parking</option>
                    <option value="extraBalcony" id="extraBalcony">Balcony</option> */