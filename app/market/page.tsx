// app/

// Project: Stock Trading System Simulator
// Display Create Stock Page
import Head from "next/head";
import { auth } from "../../auth";
import { getMarketData, randomizeStockPrices } from "../lib/actions";
import { TradeForm } from "../lib/ui/tradeconfirm";
import prisma from "../lib/prisma";

export default async function ViewMarket() {
  const session = await auth();

  await randomizeStockPrices();
  const stocks = await getMarketData();

  // Fetch the user's profile using their email
  const profile = await prisma.profile.findUnique({
    where: { email: session?.user?.email },
  });

  // Use the profile's userId as the profileId for the portfolio
  const portfolio = profile
    ? await prisma.portfolio.findUnique({
        where: { profileId: profile.userId },
        include: {
          stocks: {
            include: {
              stock: true,
            },
          },
        },
      })
    : null;

  if (!portfolio) {
    return (
      <div>
        <h3>View Market</h3>
        <p>
          You do not have a portfolio yet. Please contact support or try
          re-registering.
        </p>
      </div>
    );
  }
  // Check if the market is open (not Sunday [0] or Saturday [6])
  // const isMarketOpen = () => {
  //   const day = new Date().getDay();
  //   return day !== 0 && day !== 6;
  // };

  // if (!isMarketOpen()) {
  //   return (
  //     <div>
  //       <h3>View Market</h3>
  //       <p>The market is closed today. Please come back on a weekday.</p>
  //     </div>
  //   );
  // }
  return (
    <>
      <Head>
        <title>Stock Sim | Market</title>
      </Head>
      <div>
        <h3>View Market</h3>
        <table id="markTable">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Ticker</th>
              <th>Price</th>
              <th>Available</th>
              <th>Day Open</th>
              <th>Day High</th>
              <th>Day Low</th>
              <th>Price Change</th>
              <th>Market Cap</th>
              <th>Quantity Held by You</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => {
              const held =
                portfolio?.stocks.find((s) => s.stockId === stock.stockId)
                  ?.quantity || 0;
              return (
                <tr key={stock.stockId}>
                  <td>{stock.companyName}</td>
                  <td>{stock.ticker}</td>
                  <td>${stock.currentPrice.toFixed(2)}</td>
                  <td>{stock.initialVolume}</td>
                  <td>{Number(stock.openPrice)}</td>
                  <td>{Number(stock.dayHigh)}</td>
                  <td>{Number(stock.dayLow)}</td>
                  <td>{Number(stock.priceChange)}</td>
                  <td>
                    {Number(stock.dailyVolume) * Number(stock.currentPrice)}
                  </td>
                  <td>{held}</td>
                  <td>
                    <TradeForm stockId={stock.stockId} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
