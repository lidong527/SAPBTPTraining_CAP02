using myorder from '../db/schema01';

@impl: './order-service.ts'
service Order01Service {

    entity SalesOrders    as projection on myorder.SalesOrders;

    entity PurchaseOrders as projection on myorder.PurchaseOrders;

    entity Payments       as projection on myorder.Payments;

    function getDashboard() returns DashboardResult;
}

type DashboardResult {

    totalSales    : Decimal(15, 2);

    totalPurchase : Decimal(15, 2);

    totalPaid     : Decimal(15, 2);

    totalUnpaid   : Decimal(15, 2);

    salesCount      : Integer;
    purchaseCount   : Integer;
    paymentCount    : Integer;
}
