class Job {
	constructor(
		title,
		multiplyer,
		startTime,
		endTime,
		daysPerWeek,
		weeksHoliday
	) {
		this.title = title;
		this.multiplyer = multiplyer;
		this.startTime = startTime;
		this.endTime = endTime;
		this.daysPerWeek = daysPerWeek;
		this.weeksHoliday = weeksHoliday;
	}
	moneyPerHour() {
		return Math.min(this.multiplyer * 60 * 60);
	}
	moneyPerWeek() {
		let hoursPerDay = this.endTime - this.startTime;
		let hoursPerWeek = hoursPerDay * this.daysPerWeek;
		let result = this.multiplyer * 60 * 60 * hoursPerWeek;
		return result;
	}
	moneyPerMonth() {
		return this.moneyPerWeek() * 4;
	}
	moneyPerYear() {
		return this.moneyPerMonth() * 12 - this.moneyPerWeek() * this.weeksHoliday;
	}
}

export default Job;
