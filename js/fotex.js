class FotexPriceStrategy {
    getDescription() {
        return "Velkommen til Føtex. Det koster 15 kr. pr. påbegyndte kvarter";
    }
    calculatePrice(checkinTime, checkoutTime) {
        const time = (checkoutTime - checkinTime) / 1000;
        return 15 * (Math.floor(time/15) + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new FotexPriceStrategy()));
});