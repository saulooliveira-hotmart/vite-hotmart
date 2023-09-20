// Base Cosmos CSS
import '@hotmart-org-ca/cosmos-web/dist/web-components/cosmos-web/cosmos-web.css';

// Cosmos Tokens CSS variables. Theme: hotmart-product
import '@hotmart-org-ca/cosmos-tokens/dist/hotmart-product/base/css/_variables.css';

// Importing Alert component
import { HcAlert } from "@hotmart-org-ca/cosmos-web/dist/react/hc-alert";
import { HcFormField } from "@hotmart-org-ca/cosmos-web/dist/react/hc-form-field";
import { HcButton } from "@hotmart-org-ca/cosmos-web/dist/react/hc-button";
import {Form, Link} from "react-router-dom";

import type { ActionFunction } from "react-router";
export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    console.log(formData.get('my-input4')) ;// 'my-input4 value
    console.log(formData.get('input-date')) ;// 'my-input4 value
    // Display the values
    for (const value of formData.values()) {
        console.log(value);
    }
    // console.log(action) ;// 'my-input5 value
    return true
}

function HomePage() {
    return (
        <>
            <HcAlert context="info" dismissible className="mb-4">
                My first alert!
            </HcAlert>
            <Form method="post">
                <HcFormField>
                    <label htmlFor="my-input4" slot="label">Label</label>
                    <input placeholder="This is a placeholder" id="my-input4" name="my-input4" type="text" />
                </HcFormField>
                <HcFormField>
                    <label htmlFor="my-input4" slot="label">Label</label>
                    <input placeholder="This is a placeholder" id="input-date" name="input-date" type="date" />
                </HcFormField>
                <HcButton type="submit">Enviar</HcButton>
            </Form>

            <Link to={'/support/change-ownership/123'} className="mt-4 block">Change Ownership</Link>
        </>
    )
}
export default HomePage
