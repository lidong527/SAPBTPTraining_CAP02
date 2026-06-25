import cds from '@sap/cds';
import type {
    SalesOrders as SalesOrderType,
    PurchaseOrders as PurchaseOrderType,
    Payments as PaymentType,

} from "../@cds-models/Order01Service";
import type { DashboardResult } from '#cds-models/';

// import type {
//     DashboardResult
// } from "../@cds-models/Order01Service"; 
export default class OrderService01 extends cds.ApplicationService {

    async init() {

        const {
            SalesOrders,
            PurchaseOrders,
            Payments
        } = cds.entities("Order01Service");//this.entities;

        this.on('getDashboard', async () => {

            // const salesOrders =
            //     await SELECT.from(SalesOrders);

            // const purchaseOrders =
            //     await SELECT.from(PurchaseOrders);

            // const payments =
            //     await SELECT.from(Payments);
            // const salesResult =
            //     await SELECT.one
            //         .from(SalesOrders)
            //         .columns('sum(amount) as total');

            // const purchaseResult =
            //     await SELECT.one
            //         .from(PurchaseOrders)
            //         .columns('sum(amount) as total');

            // const paidResult =
            //     await SELECT.one
            //         .from(Payments)
            //         .columns('sum(paidAmount) as total');

            const [
                salesResult,
                purchaseResult,
                paidResult,
                salesCount,
                purchaseCount,
                paymentCount
            ] = await Promise.all([
                SELECT.one
                    .from(SalesOrders)
                    .columns('sum(amount) as total'),

                SELECT.one
                    .from(PurchaseOrders)
                    .columns('sum(amount) as total'),

                SELECT.one
                    .from(Payments)
                    .columns('sum(paidAmount) as total'),

                SELECT.one
                    .from(SalesOrders)
                    .columns('count(*) as count'),

                SELECT.one
                    .from(PurchaseOrders)
                    .columns('count(*) as count'),
                SELECT.one
                    .from(Payments)
                    .columns('count(*) as count')
            ]);

            // const totalSales =
            //     salesOrders.reduce(
            //         (sum: number, item: any) =>
            //             sum + Number(item.amount),
            //         0
            //     );

            // const totalPurchase =
            //     purchaseOrders.reduce(
            //         (sum: number, item: any) =>
            //             sum + Number(item.amount),
            //         0
            //     );

            // const totalPaid =
            //     payments.reduce(
            //         (sum: number, item: any) =>
            //             sum + Number(item.paidAmount),
            //         0
            //     );
            const totalSales =
                Number(salesResult?.total ?? 0);

            const totalPurchase =
                Number(purchaseResult?.total ?? 0);

            const totalPaid =
                Number(paidResult?.total ?? 0);

            const result: DashboardResult = {
                totalSales,
                totalPurchase,
                totalPaid,
                totalUnpaid:
                    totalSales - totalPaid,
                salesCount: Number(salesCount?.count ?? 0),
                purchaseCount: Number(purchaseCount?.count ?? 0),
                paymentCount: Number(paymentCount?.count ?? 0)
            };
            return result;
        });


        this.on('READ', SalesOrders, async (req) => {
            console.log('OrderService loaded');
            return await SELECT.from(SalesOrders) as SalesOrderType[];

        });

        return super.init();
    }
}