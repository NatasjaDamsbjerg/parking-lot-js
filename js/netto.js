class NettoPriceStrategy {
    getDescription() {
        return "Velkommen til Netto. Det koster 10 kr. det første kvarter. Derefter koster det 5 kr. pr. påbegyndte karter";
    }
    calculatePrice(checkinTime, checkoutTime) {
        const time = (checkoutTime - checkinTime) / 1000;
        if (time < 15) {
            return 10;
        }else{
            return 5 * (Math.floor(time/15) + 1);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new NettoPriceStrategy()));
});