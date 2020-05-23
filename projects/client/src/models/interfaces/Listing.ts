// * Will be changed when we have real data coming from Banner API
interface Faculty {
    displayName: string
}

export default interface Listing {
    courseReferenceNumber: string
    _id: string
    id: number
    subject: string
    subjectDescription: string
    campusDescription: string
    scheduleTypeDescription: string
    creditHours: string
    seatsAvailable: number
    enrollment: number
    maximumEnrollment: number
    faculty: Faculty[]
    term: string
    courseTitle: string
    courseNumber: string
}