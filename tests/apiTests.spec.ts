import { test, expect } from '@playwright/test';


test('GET request - list of users', async ({request}) => {
    const issues = await request.get('https://reqres.in/api/users?page=2');
    expect(issues.status()).toBe(200)
    const responseJson = await issues.json()
    expect(responseJson.page).toBe(2)
})

test('POST request testing', async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',{
        data: {
            "name": "Jack",
            "job":  "Pirate"
    }
   })
    const responseJson = await response.json()
    expect(responseJson.name).toBe('Jack')
    expect(response.ok())
    expect(response.status()).toBe(201)

    expect(await response.json()).toMatchObject(
        {
            "name": "Jack",
            "job":  "Pirate"
        }
    )
})

/* Homework */

test('PUT request testing', async ({request}) => {
    const putResponse = await request.put('https://reqres.in/api/users/2', {
        data:{
            "name": "testName",
            "job":  "QA"
        }
    })
    expect(putResponse.status()).toBe(200)
    const putResponseJson = await putResponse.json()
    expect(putResponseJson).toMatchObject(
        {
            "name": "testName",
            "job":  "QA"
        }
    )
})

test('DELETE request testing', async ({request}) => {
    const deleteResponse = await request.delete('https://reqres.in/api/users/2');
    expect(deleteResponse.status()).toBe(204)
    const text = await deleteResponse.text()
    expect(text).not.toContain('name')
    const headers =  deleteResponse.headers()
    expect(headers["content-length"]).toEqual("0")
})

test('PATCH request testing', async ({request}) => {
    const patchResponse = await request.patch('https://reqres.in/api/users/2', {
        data:{
            "name": "PatchName",
            "job":  "Engineer"
        }
    })
    expect(patchResponse.status()).toBe(200)
    const patchResponseJson = await patchResponse.json()
    expect(patchResponseJson).toMatchObject(
        {
            "name": "PatchName",
            "job":  "Engineer"
        }
    )
})
