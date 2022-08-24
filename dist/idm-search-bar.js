import { NewMdcSelectComponent, NewMdcButton, NewMdcTextField } from './mdc-builder';
export class SearchBar {
    constructor(tid, data) {
        this.no_search_result = false;
        this.previous_search_params = { name: "", email: "", phone: "", note: "", arrival: "", departure: "", room: "" };
        this.search_params = { name: "", email: "", phone: "", note: "", arrival: "", departure: "", room: "" };
        //this.tagid = tid;
        this.roomsize_selected = "";
        this.search_data = data;
        const queryValue = "#" + tid;
        const container = document.querySelector(queryValue);
        const el = document.createElement('div');
        // <input type="text" name="nameinput" id="nameinput" />
        // <input type="email" name="emailinput" id="emailinput" />
        // <input type="tel" name="phoneinput" id="phoneinput" />
        // <input type="text" name="noteinput" id="noteinput" />
        // <input type="date" name="arrival" id="arrivaldp" >
        // <input type="date" name="departure" id="departuredp" >
        // <select name="roomsize" id="roomsize">
        // <option value="business-suite">Business Suite</option>
        // <option value="presidential-suite">Presidential Suite</option>
        // </select>
        // <button id="searchbtn">Search</button>
        // <button id="clearbtn">Clear</button>
        el.innerHTML = `
            <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
            <div id="search-bar-top-row">
                <label class="username mdc-text-field mdc-text-field--filled">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label" id="idm-username">Name</span>
                    <input class="mdc-text-field__input" type="text" id="nameinput" aria-labelledby="idm-username">
                    <span class="mdc-line-ripple"></span>
                </label>
                <label class="email mdc-text-field mdc-text-field--filled">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label" id="idm-email">Email</span>
                    <input class="mdc-text-field__input" type="email" id="emailinput" aria-labelledby="idm-email">
                    <span class="mdc-line-ripple"></span>
                </label>
                <label class="phone mdc-text-field mdc-text-field--filled">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label" id="idm-phone">Phone</span>
                    <input class="mdc-text-field__input" type="tel" id="phoneinput" aria-labelledby="idm-phone">
                    <span class="mdc-line-ripple"></span>
                </label>
                <label class="note mdc-text-field mdc-text-field--filled">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label" id="idm-note">Note</span>
                    <input class="mdc-text-field__input" type="text" id="noteinput" aria-labelledby="idm-note">
                    <span class="mdc-line-ripple"></span>
                </label>
            </div>
            <br />
            <br />
            <div id="search-bar-bottom-row">
                <div>
                    <input type="date" name="arrival" id="arrivaldp"/>
                    <label for="arrivaldp" id="arrival-datepicker-label">Arrival Date</label>
                </div>
                <div>
                    <input type="date" name="departure" id="departuredp"/>
                    <label for="departuredp" id="departure-datepicker-label">Departure Date</label>
                </div>
                <div class="roomsize mdc-select">
                    <div class="mdc-select__anchor">
                        <i class="mdc-select__dropdown-icon"></i>
                        <div class="mdc-select__selected-text" id="roomsize"></div>
                        <span class="mdc-floating-label">Room Size</span>
                        <span class="mdc-line-ripple"></span>
                    </div>
                    <div class="mdc-select__menu mdc-menu mdc-menu-surface">
                        <ul class="mdc-list">
                            <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
                            <li class="mdc-list-item" data-value="business-suite">
                            <span class="mdc-list-item__text">
                                Business Suite
                            </span
                            </li>
                            <li class="mdc-list-item" data-value="presidential-suite">
                            <span class="mdc-list-item__text">
                                Presidential Suite
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <button id="searchbtn" class="searchbtn mdc-button mdc-button--raised mdc-button--leading">
                    <span class="mdc-button__ripple"></span>
                    <i class="material-icons mdc-button__icon" aria-hidden="true">search</i>
                    <span class="mdc-button__label">Search</span>
                </button>
                <button id="clearbtn" class="clearbtn mdc-button mdc-button--outlined mdc-button--icon-leading">
                    <span class="mdc-button__ripple"></span>
                    <i class="material-icons mdc-button__icon" aria-hidden="true">close</i>
                    <span class="mdc-button__label">Clear</span>
                </button>
            </div>
            
            
        `;
        container === null || container === void 0 ? void 0 : container.appendChild(el);
        // const nameInput = <HTMLInputElement>document.getElementById("nameinput");
        // const emailInput = <HTMLInputElement>document.getElementById("emailinput");
        // const phoneInput = <HTMLInputElement>document.getElementById("phoneinput");
        // const noteInput = <HTMLInputElement>document.getElementById("noteinput");
        const arrivalDatepickerLabel = document.getElementById("arrival-datepicker-label");
        arrivalDatepickerLabel.style.setProperty("display", "block");
        const departureDatepickerLabel = document.getElementById("departure-datepicker-label");
        departureDatepickerLabel.style.setProperty("display", "block");
        const searchBarTopRow = document.getElementById("search-bar-top-row");
        searchBarTopRow.style.setProperty("display", "flex");
        searchBarTopRow.style.setProperty("justify-content", "center");
        searchBarTopRow.style.setProperty("align-items", "center");
        searchBarTopRow.style.setProperty("flex-direction", "row");
        searchBarTopRow.style.setProperty("padding-top", "30px");
        const searchBarBottomRow = document.getElementById("search-bar-bottom-row");
        searchBarBottomRow.style.setProperty("display", "flex");
        searchBarBottomRow.style.setProperty("justify-content", "center");
        searchBarBottomRow.style.setProperty("align-items", "center");
        searchBarBottomRow.style.setProperty("flex-direction", "row");
        searchBarBottomRow.style.setProperty("padding-bottom", "20px");
        const arrivalDatePicker = document.getElementById("arrivaldp");
        arrivalDatePicker.style.setProperty("padding-top", "20px");
        arrivalDatePicker.style.setProperty("width", "220px");
        arrivalDatePicker.style.setProperty("margin-top", "10px");
        const departureDatePicker = document.getElementById("departuredp");
        departureDatePicker.style.setProperty("padding-top", "20px");
        departureDatePicker.style.setProperty("width", "220px");
        departureDatePicker.style.setProperty("margin-top", "10px");
        const searchBtnElement = document.querySelector('#searchbtn');
        const clearBtnElement = document.querySelector('#clearbtn');
        searchBtnElement.addEventListener('click', (e) => {
            e.preventDefault();
            this.searchData();
        });
        clearBtnElement.addEventListener('click', (e) => {
            e.preventDefault();
            this.initSearchElement();
        });
        this.buildMDC();
    }
    buildMDC() {
        NewMdcTextField(document.querySelector('.username'));
        NewMdcTextField(document.querySelector('.email'));
        NewMdcTextField(document.querySelector('.phone'));
        NewMdcTextField(document.querySelector('.note'));
        this.roomsize_selected = NewMdcSelectComponent(document.querySelector('.roomsize'), "");
        //NewMdcSelect(document.querySelector('.roomsize'));
        NewMdcButton(document.querySelector('.searchbtn'));
        NewMdcButton(document.querySelector('.clearbtn'));
    }
    initSearchElement() {
        const clearSearchResult = new CustomEvent("clearSearchResult", { detail: null });
        window.dispatchEvent(clearSearchResult);
        const searchResultFlag = new CustomEvent("searchResultFlag", { detail: false });
        window.dispatchEvent(searchResultFlag);
        const nameInputElement = document.querySelector('#nameinput');
        nameInputElement.value = "";
        const emailInputElement = document.querySelector('#emailinput');
        emailInputElement.value = "";
        const phoneInputElement = document.querySelector('#phoneinput');
        phoneInputElement.value = "";
        const noteInputElement = document.querySelector('#noteinput');
        noteInputElement.value = "";
        const roomsizeElement = document.querySelector('#roomsize');
        roomsizeElement.textContent = "";
        this.roomsize_selected.value = "";
        const arrivalDpElement = document.querySelector('#arrivaldp');
        arrivalDpElement.value = "";
        const departureDpElement = document.querySelector('#departuredp');
        departureDpElement.value = "";
        this.previous_search_params = { name: "", email: "", phone: "", note: "", arrival: "", departure: "", room: "" };
    }
    searchData() {
        //before search
        //get all value from querySelector, then filter data base on each search critirial value
        const nameInputElement = document.querySelector('#nameinput');
        this.search_params.name = nameInputElement.value;
        const emailInputElement = document.querySelector('#emailinput');
        this.search_params.email = emailInputElement.value;
        const phoneInputElement = document.querySelector('#phoneinput');
        this.search_params.phone = phoneInputElement.value;
        const noteInputElement = document.querySelector('#noteinput');
        this.search_params.note = noteInputElement.value;
        //const roomsizeElement = document.querySelector('#roomsize') as HTMLSelectElement;
        this.search_params.room = this.roomsize_selected.value;
        const arrivalDpElement = document.querySelector('#arrivaldp');
        this.search_params.arrival = arrivalDpElement.value;
        const departureDpElement = document.querySelector('#departuredp');
        this.search_params.departure = departureDpElement.value;
        if (!nameInputElement.value && !emailInputElement.value && !phoneInputElement.value && !noteInputElement.value && !this.search_params.room && !arrivalDpElement.value && !departureDpElement.value)
            return;
        if (JSON.stringify(this.previous_search_params) === JSON.stringify(this.search_params))
            return;
        //searching
        this.search_result = this.search_data.filter((d) => {
            return (nameInputElement.value ? (this.isStringInclude(d.firstName, nameInputElement.value) || this.isStringInclude(d.lastName, nameInputElement.value)) : true) &&
                (emailInputElement.value ? this.isStringInclude(d.email, emailInputElement.value) : true) &&
                (phoneInputElement.value ? this.isStringInclude(d.phone, phoneInputElement.value) : true) &&
                (noteInputElement.value ? this.isStringInclude(d.note, noteInputElement.value) : true) &&
                (this.search_params.room ? this.isStringInclude(d.room.roomSize, this.search_params.room) : true) &&
                (arrivalDpElement.value ? this.isDateEqual(d.stay.arrivalDate, arrivalDpElement.value) : true) &&
                (departureDpElement.value ? this.isDateEqual(d.stay.departureDate, departureDpElement.value) : true);
        });
        this.previous_search_params = JSON.parse(JSON.stringify(this.search_params));
        //use event emitter to pass data to main page
        if (this.search_result.length == 0) {
            this.no_search_result = true;
        }
        const searchDone = new CustomEvent("searchDone", { detail: this.search_result });
        window.dispatchEvent(searchDone);
        const searchResultFlag = new CustomEvent("searchResultFlag", { detail: this.no_search_result });
        window.dispatchEvent(searchResultFlag);
        //after search, search done
    }
    setSearchResult(result) {
        this.search_result = result;
        ;
    }
    getSearchResult() {
        return this.search_result;
    }
    isStringInclude(originalString, searchString) {
        if (!originalString || !searchString)
            return false;
        if (originalString.toLowerCase().includes(searchString.toLowerCase())) {
            return true;
        }
        return false;
    }
    isDateEqual(originalDate, searchDate) {
        if (!originalDate || !searchDate)
            return false;
        if (new Date(originalDate).setUTCHours(0, 0, 0, 0) === new Date(searchDate).getTime()) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=idm-search-bar.js.map