import { test, expect } from '@playwright/test'
import {faker } from '@faker-js/faker'

test('Create Student', async ({ request }) => {

    const requestBody = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email({ provider:'talteck.com' }),
        password: '123456',
        confirmPassword: '123456',
        dob: {
            year: faker.number.int({min:1980, max:2000}),
            month: faker.number.int({min:1, max:12}),
            day: faker.number.int({min:1, max:28})
        },
        gender: faker.helpers.arrayElement(["male","female"]),
        agree: true
    }

    const response = await request.post('https://qa.taltektc.com/api/signup',{
                                headers:{
                                    'Content-Type':'application/json',
                                    'api_token':'DevGF4sg665s4ggFddfdgdgFFrs54D87sr54afggsTTC'
                                },
                                data: requestBody
                            })

    const responseBody = await response.json();
    console.log(responseBody);
    

    expect(response.status()).toBe(200)
    expect(responseBody.message).toBe('User created successfully')
    expect(responseBody.data.firstName).toBe(requestBody.firstName)
})
