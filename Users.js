class Users {
    constructor(LastName, FirstName, IdNumber, Year, Password, Picture) {
        if (LastName === undefined && FirstName === undefined && IdNumber === undefined && Year === undefined && Password === undefined && Picture === undefined) {
            this.LastName = null;
            this.FirstName = null;
            this.IdNumber = null;
            this.Year = null;
            this.Password = null;
            this.Picture = null;
        } else {
            this.LastName = LastName;
            this.FirstName = FirstName;
            this.IdNumber = IdNumber;
            this.Year = Year;
            this.Password = Password;
            this.Picture = Picture;
        }
    }
}