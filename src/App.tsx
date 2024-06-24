import {Form} from "./components/Form/Form.tsx";

import {ToastQueue} from '@react-spectrum/toast'
import {FormField, FormRootErrors, WatchState} from "./components/Form";
import {Button, Label} from "react-aria-components";
import TextField from "./components/TextField/TextField.tsx";

function App() {
  return (
    <div className="w-96 flex flex-col items-center mx-auto">
      <h1 className="font-bold font-mono text-3xl text-center pt-32">Declarative Form API</h1>
      <p className="text-slate-400 italic m-4">Open console to see insights to declarative form api</p>
      <div className="flex items-center justify-center p-72 pt-24">
        <Form
          action="https://jsonplaceholder.typicode.com/posts"
          method="POST"
          transformData={(data) => {
            console.log('Transform data before submitting the form', data)
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
          <FormRootErrors/>

          <div className="flex w-full gap-x-3">
            <FormField name="first_name">
              <div className="w-full flex flex-col space-y-1.5">
                <Label>First name</Label>
                <TextField />
              </div>
            </FormField>

            <FormField name="last_name">
              <div className="w-full flex flex-col space-y-1.5">
                <Label>Last name</Label>
                <TextField />
              </div>
            </FormField>
          </div>

          <FormField name="email">
            <div className="flex flex-col space-y-1.5">
              <Label>Email</Label>
              <TextField/>
            </div>
          </FormField>

          <FormField name="phone">
            <div className="flex flex-col space-y-1.5">
              <Label>Phone</Label>
              <TextField/>
            </div>
          </FormField>

          <FormField name="password">
            <div className="flex flex-col space-y-1.5">
              <Label>Password</Label>
              <TextField type="password"/>
            </div>
          </FormField>

          <WatchState name="password">
            {(pass) => {
              if (pass) console.log("The Password input in Confirm Password is visible because of the <WatchState />: ", pass);
              return (
                <FormField name="password_confirmation">
                  <div className="flex flex-col space-y-1.5">
                    <Label>Confirm password</Label>
                    <TextField type="password" watchStateVal={pass}/>
                  </div>
                </FormField>)
            }}
          </WatchState>

          <Button className="text-white rounded-lg bg-emerald-800 w-full py-3 px-6 !mt-16" slot="submit" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
