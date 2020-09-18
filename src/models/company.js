export default class Company {
	constructor(id, name, segment, contract, renewals, npsAvg, npsLast, npsFirst) {
		this.id = id;
		this.name = name;
		this.segment = segment;
		this.contract = contract;
		this.renewals = renewals;
		this.npsAvg = npsAvg;
		this.npsLast = npsLast;
		this.npsFirst = npsFirst;
	}
}
