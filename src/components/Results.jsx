import { calculateInvestmentResults, formatter } from "../util/investment.js";


export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData);

//     return (
//         <table id="result">
//             <thead>
//                 <tr>
//                     <th>Year</th>
//                     <th>investment Value</th>
//                     <th>Intrest (Year)</th>
//                     <th>Total Interest</th>
//                     <th>Invested Capital</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {resultsData.map(yearData => {
//                     return <tr key={yearData.year}>
//                         <td>
//                             {yearData.year}
//                         </td>
//                         <td>
//                             {formatter.format(yearData.investmentValue)}  
//                         </td>
//                         <td>
//                             {formatter.format(yearData.interest)}
//                         </td>
//                         <td>
//                             {formatter.format(yearData.totalInterest)}
//                         </td>
//                         <td>
//                             {formatter.format(yearData.investedCapital)}
//                         </td>
//                         <td>
//                         </td>
//                     </tr>
//                 })}
//             </tbody>
//         </table>

//     );
// }

 return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const investedCapital =
            input.initialInvestment +
            yearData.annualInvestment * yearData.year;
          const totalInterest = yearData.valueEndOfYear - investedCapital;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}