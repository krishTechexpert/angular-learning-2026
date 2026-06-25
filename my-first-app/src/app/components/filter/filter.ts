import { Component } from '@angular/core';
import { User } from '../pipe-demo/User';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  filterBy:any;
  userList:User[]= [
    {
      id: 1,
      name: 'Krishna Kumar',
      username: 'krishna.kumar',
      email: 'krishna@example.com',
      address: {
        street: 'Anna Salai',
        suite: 'Apt 101',
        city: 'Chennai',
        zipcode: '600002',
        geo: {
          lat: '13.0827',
          lng: '80.2707'
        }
      },
      phone: '9876543210',
      website: 'krishna.dev',
      company: {
        name: 'TCS',
        catchPharse: 'Experience certainty',
        bs: 'IT Services'
      }
    },
    {
      id: 2,
      name: 'Priya Sharma',
      username: 'priya.sharma',
      email: 'priya@example.com',
      address: {
        street: 'MG Road',
        suite: 'Apt 202',
        city: 'Bangalore',
        zipcode: '560001',
        geo: {
          lat: '12.9716',
          lng: '77.5946'
        }
      },
      phone: '9123456780',
      website: 'priya.dev',
      company: {
        name: 'Infosys',
        catchPharse: 'Navigate your next',
        bs: 'Consulting'
      }
    },
    {
      id: 3,
      name: 'Rahul Verma',
      username: 'rahul.verma',
      email: 'rahul@example.com',
      address: {
        street: 'Banjara Hills',
        suite: 'Apt 303',
        city: 'Hyderabad',
        zipcode: '500034',
        geo: {
          lat: '17.3850',
          lng: '78.4867'
        }
      },
      phone: '9988776655',
      website: 'rahul.io',
      company: {
        name: 'Wipro',
        catchPharse: 'Applying thought',
        bs: 'Technology'
      }
    },
    {
      id: 4,
      name: 'Anjali Singh',
      username: 'anjali.singh',
      email: 'anjali@example.com',
      address: {
        street: 'Connaught Place',
        suite: 'Apt 404',
        city: 'Delhi',
        zipcode: '110001',
        geo: {
          lat: '28.6139',
          lng: '77.2090'
        }
      },
      phone: '9871234560',
      website: 'anjali.dev',
      company: {
        name: 'HCL',
        catchPharse: 'Technology that touches lives',
        bs: 'Software'
      }
    },
    {
      id: 5,
      name: 'Vikram Patel',
      username: 'vikram.patel',
      email: 'vikram@example.com',
      address: {
        street: 'CG Road',
        suite: 'Apt 505',
        city: 'Ahmedabad',
        zipcode: '380009',
        geo: {
          lat: '23.0225',
          lng: '72.5714'
        }
      },
      phone: '9765432100',
      website: 'vikram.io',
      company: {
        name: 'Tech Mahindra',
        catchPharse: 'Connected world, connected future',
        bs: 'Telecom'
      }
    },
    {
      id: 6,
      name: 'Sneha Reddy',
      username: 'sneha.reddy',
      email: 'sneha@example.com',
      address: {
        street: 'Jubilee Hills',
        suite: 'Apt 606',
        city: 'Hyderabad',
        zipcode: '500033',
        geo: {
          lat: '17.4319',
          lng: '78.4077'
        }
      },
      phone: '9654321098',
      website: 'sneha.dev',
      company: {
        name: 'Cognizant',
        catchPharse: 'Coding the future',
        bs: 'Digital'
      }
    },
    {
      id: 7,
      name: 'Arjun Nair',
      username: 'arjun.nair',
      email: 'arjun@example.com',
      address: {
        street: 'Marine Drive',
        suite: 'Apt 707',
        city: 'Mumbai',
        zipcode: '400020',
        geo: {
          lat: '18.9438',
          lng: '72.8237'
        }
      },
      phone: '9543210987',
      website: 'arjun.io',
      company: {
        name: 'Accenture',
        catchPharse: 'Let there be change',
        bs: 'Management'
      }
    },
    {
      id: 8,
      name: 'Deepika Menon',
      username: 'deepika.menon',
      email: 'deepika@example.com',
      address: {
        street: 'Brigade Road',
        suite: 'Apt 808',
        city: 'Bangalore',
        zipcode: '560025',
        geo: {
          lat: '12.9719',
          lng: '77.6074'
        }
      },
      phone: '9432109876',
      website: 'deepika.dev',
      company: {
        name: 'IBM',
        catchPharse: 'Think',
        bs: 'Cloud'
      }
    },
    {
      id: 9,
      name: 'Suresh Babu',
      username: 'suresh.babu',
      email: 'suresh@example.com',
      address: {
        street: 'T Nagar',
        suite: 'Apt 909',
        city: 'Chennai',
        zipcode: '600017',
        geo: {
          lat: '13.0418',
          lng: '80.2341'
        }
      },
      phone: '9321098765',
      website: 'suresh.io',
      company: {
        name: 'Capgemini',
        catchPharse: 'Get the future you want',
        bs: 'Engineering'
      }
    },
    {
      id: 10,
      name: 'Meera Iyer',
      username: 'meera.iyer',
      email: 'meera@example.com',
      address: {
        street: 'Velachery',
        suite: 'Apt 1010',
        city: 'Chennai',
        zipcode: '600042',
        geo: {
          lat: '12.9810',
          lng: '80.2180'
        }
      },
      phone: '9210987654',
      website: 'meera.dev',
      company: {
        name: 'Oracle',
        catchPharse: 'Hardware and Software, Engineered to Work Together',
        bs: 'Database'
      }
    }
  ];

  onAddUser(){

    const newUser =  {
      id: Math.floor(Math.random() * 1000),
      name: 'Varun Iyer',
      username: 'meera.iyer',
      email: 'meera@example.com',
      address: {
        street: 'Velachery',
        suite: 'Apt 1010',
        city: 'Chennai',
        zipcode: '600042',
        geo: {
          lat: '12.9810',
          lng: '80.2180'
        }
      },
      phone: '9210987654',
      website: 'meera.dev',
      company: {
        name: 'Oracle',
        catchPharse: 'Hardware and Software, Engineered to Work Together',
        bs: 'Database'
      }
    }
    // ❌ push — same reference
  this.userList.push(newUser);
    // ✅ spread — new reference
  this.userList = [...this.userList, newUser];
}
}

