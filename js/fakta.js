class FaktaPriceStrategy {
    getDescription() {
        return "Velkommen til Fakta. Det koster 0 kr. de første 5 min. Derefter koster det 20 kr. pr. påbegyndte karter";
    }
    calculatePrice(checkinTime, checkoutTime) {
        const time = ((checkoutTime - checkinTime) / 1000) - 5;
        if (time < 0) {
            return 0;
        }else{
            return 20 * (Math.floor(time/15) + 1);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new FaktaPriceStrategy()));
});