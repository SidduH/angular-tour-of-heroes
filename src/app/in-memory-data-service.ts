import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: "Mr Ram" },
            { id: 12, name: "Raheem" },
            { id: 13, name: "Kushal" },
            { id: 14, name: "Krunal" },
            { id: 15, name: "Naveen" },
            { id: 16, name: "Karan" },
            { id: 17, name: "Dr Sharan" },
            { id: 18, name: "Mr Yash" },
            { id: 19, name: "Vishnu" },
            { id: 20, name: "Rajkumar" },
        ];
        return { heroes }
    }
}