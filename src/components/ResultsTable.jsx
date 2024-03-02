import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export function ResultsTable({ userInvestment }) {
	const [ investmentResults, setInvestmentResults] = useState([]);

	function calculateInvestments () {
		const investmentResultsData = calculateInvestmentResults(userInvestment);
		setInvestmentResults(investmentResultsData);
	};

	//calculateInvestments()

	return (
		<>
			{ investmentResults.length === 0 ? 
				<p className="center">Let's start investing!</p> : 
				<table id="result">
					<thead>
						<tr>
							<td>Year</td>
							<td>Investment Value</td>
							<td>Interest (Year)</td>
							<td>Total Interest</td>
							<td>Invested Capital</td>
						</tr>
					</thead>
					<tbody>
						{investmentResults.map(yearInvested => {
							return (
							<tr>
								<td>{yearInvested.year}</td>
								<td>
									${" "}
									{yearInvested.valueEndOfYear +
										yearInvested.annualInvestment}
								</td>
								<td>$ {yearInvested.interest}</td>
								<td>$ {yearInvested.annualInvestment}</td>
								<td>$ {yearInvested.totalInterest}</td>
							</tr>
							)
						})}
					</tbody>
				</table>
			}
		</>
	);
}
