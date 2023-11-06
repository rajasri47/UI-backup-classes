userContactDetails.age -> 20

userContactDetails.contactDetails.prsnl[2]
userContactDetails.address.office.buildingNo

var userContactDetails = {
    name: 'Raj',
    age: 20,
    lastname: 'Hero',
    gender: 'male',
    contactDetails: {
        office: '040-234234',
        prsnl: [985345, 98234234,23423423]
    },
    email: {
        office: 'abc@compnay.com',
        prsnl: ['abc@gmail.com', 'pqr@htomail.com']
    },
    address: {
        office: {
            countryname: 'India',
            sateInfo: 'TS',
            buildingNo: '56A'
        },
        prsnl: {
            hno: '123A',
            stateInfo: {
                name: 'TS',
                code: 'TS1'
            }
        }
    },
    relation: 'Friend',
    dob: {
        date: '09',
        month: '01'
    },
    socialId: {
        fb: 'abc34',
        twitter: 'test'
    }
}