using myorder from '../db/schema01';

service OrderService {

    entity SalesOrders
        as projection on myorder.SalesOrders;

    entity PurchaseOrders
        as projection on myorder.PurchaseOrders;

    entity Payments
        as projection on myorder.Payments;

        
}