using myorder from '../db/schema01';
using { DashboardResult } from './types';

@impl: './order-service.ts'
service Order01Service {

    entity SalesOrders    as projection on myorder.SalesOrders;

    entity PurchaseOrders as projection on myorder.PurchaseOrders;

    entity Payments       as projection on myorder.Payments;

    function getDashboard() returns DashboardResult;
}


