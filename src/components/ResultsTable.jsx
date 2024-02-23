export function ResultsTable({ investmentsResults }) {
    console.log(investmentsResults[0]);

	return (
		<>
			{investmentsResults < 1 && <p className="center">Let's start investing!</p>}
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
					{investmentsResults > 1 && investmentsResults.map(yearInvested => {
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
		</>
	);
}
