# Declarative Form API Documentation

## Overview

The Declarative Form API is an internal utility designed to streamline the process of creating and managing forms within our application. It provides several key features such as data transformation, custom form submission handling, and state watching, allowing for a more flexible and efficient form handling experience.

## Features

### Form Component

The `Form` component is the primary wrapper for our form elements. It provides several props to customize form behavior:

- **`action`**: The URL where the form data will be submitted.
- **`method`**: The HTTP method used for form submission (e.g., "POST").
- **`transformData`**: A function to transform form data before submission.
- **`onSubmitSuccess`**: A callback function executed after a successful form submission.

#### Example Usage

```jsx
<Form
  action="https://jsonplaceholder.typicode.com/posts"
  method="POST"
  transformData={(data) => {
    console.log('Transform data before submitting the form', data);
    return data;
  }}
  onSubmitSuccess={(data) => {
    console.log("Success", data);
    if (data?.status === 201) {
      ToastQueue.positive('Form submitted successfully');
    }
  }}
  className="space-y-6"
>
  <!-- Form fields go here -->
</Form>
```

### TransformData
The transformData prop allows you to modify the form data before it is submitted to the server. This can be useful for formatting data or adding additional information.

#### Example

```jsx
transformData={(data) => {
  
  'Transform data before submitting the form'
  
  const transformedData = {
    user_name: data.userName,
    pass: data.password,
  }
  return trasformedData;
}}
```
### OnSubmitSuccess
The onSubmitSuccess prop is a callback function that runs after a successful form submission. It receives the server response data as an argument and can be used to perform actions such as displaying a success message or redirecting the user.

#### Example

```jsx
onSubmitSuccess={(data) => {
  
  console.log("Success", data);
  
  if (data?.status === 201) {
    ToastQueue.positive('Form submitted successfully');
  }
}}
```

### FormField Component
The FormField component is used to create individual form fields. It accepts a name prop that corresponds to the form data key.

#### Example
```jsx
<FormField name="password">
  <div className="flex flex-col space-y-1.5">
    <Label>Password</Label>
    <TextField type="password" />
  </div>
</FormField>
```

### WatchState Component
The WatchState component allows you to watch the state of a particular form field and react to its changes. This is useful for implementing features like password confirmation.

#### Example Usage
```jsx
<FormField name="password">
  <div className="flex flex-col space-y-1.5">
    <Label>Password</Label>
    <TextField type="password" />
  </div>
</FormField>

<WatchState name="password">
  {(pass) => {
    if (pass) console.log("The Password input in Confirm Password is visible because of the <WatchState />: ", pass);
    return (
      <FormField name="password_confirmation">
        <div className="flex flex-col space-y-1.5">
          <Label>Confirm password</Label>
          <TextField type="password" watchStateVal={pass} />
        </div>
      </FormField>
    );
  }}
</WatchState>
```

In this example, the WatchState component monitors the state of the password field. When the password field changes, the WatchState component receives the updated value and uses it to control the password_confirmation field.

## Conclusion
The Declarative Form API provides a powerful and flexible way to manage forms within our application. By leveraging features such as data transformation, custom submission handling, and state watching, developers can create robust and dynamic forms with ease.