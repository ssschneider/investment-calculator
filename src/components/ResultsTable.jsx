import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export function ResultsTable({ userInvestment }) {
	const  investmentResults = calculateInvestmentResults(userInvestment);
	const initialInvestment = investmentResults[0].valueEndOfYear - investmentResults[0].interest - investmentResults[0].annualInvestment;

	return (
		<>
			{ investmentResults.length === 0 ? 
				<p className="center">Let's start investing!</p> : 
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
						{investmentResults.map(yearInvested => {
							const totalInterest = yearInvested.valueEndOfYear - yearInvested.annualInvestment * yearInvested.year - initialInvestment;
							const totalAmountInvested = yearInvested.valueEndOfYear - totalInterest;

							return (
								<tr key={yearInvested.year}>
									<td>{yearInvested.year}</td>
									<td>{formatter.format(yearInvested.valueEndOfYear)}</td>
									<td>{formatter.format(yearInvested.interest)}</td>
									<td>{formatter.format(totalInterest)}</td>
									<td>{formatter.format(totalAmountInvested)}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			}
		</>
	);
}
