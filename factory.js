
// Factory Method
// Define uma interface de criação de objeto, mas deixa a sua subclasse decidir qual classe deve ser instânciada
// É considerado um "Construtor virtual"

class CreditCard {
    Authorization (params) {
        console.log("Sucess buy in Credit Card: " + params);
    }
}

class DebitCard {
    Authorization (params) {
        console.log("Sucess buy in Debit Card: " + params);
    }
}

class PaymentSlip {
    Authorization (params) {
        console.log("Sucess buy in Payment slip: " + params);
    }
}

function TransacationProcessor() {
    return {
        CreateTransacationProcessor: (type) => {
            switch (type) {
                case "CreditCard":
                    return new CreditCard();
                case "DebitCard":
                    return new DebitCard();
                case "PaymentSlip":
                    return new PaymentSlip();
                
            }
        }
    };
}

let transacationProcessor = TransacationProcessor();

let debit = transacationProcessor.CreateTransacationProcessor("DebitCard");
console.log(debit.Authorization("smartphone"));

let credit = transacationProcessor.CreateTransacationProcessor("CreditCard");
console.log(credit.Authorization("apple TV"));

let paymentSlip = transacationProcessor.CreateTransacationProcessor("PaymentSlip");
console.log(paymentSlip.Authorization("mixer"));

// function  person() {
//     return {
//         metedo: (params) => console.log("chegou " + params)
//     }
// }

// const deb = person();
// console.log(deb.metedo("vai"));
