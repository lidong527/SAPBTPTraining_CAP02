namespace myorder;

entity SalesOrders {

    key ID : Integer;

    customer : String(100);

    amount : Decimal(15,2);
}

entity PurchaseOrders {

    key ID : Integer;

    vendor : String(100);

    amount : Decimal(15,2);
}

entity Payments {

    key ID : Integer;

    salesOrderId : Integer;

    paidAmount : Decimal(15,2);
}