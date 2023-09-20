// Base Cosmos CSS
import '@hotmart-org-ca/cosmos-web/dist/web-components/cosmos-web/cosmos-web.css';

// Cosmos Tokens CSS variables. Theme: hotmart-product
import '@hotmart-org-ca/cosmos-tokens/dist/hotmart-product/base/css/_variables.css';

// Importing Alert component
import { HcAlert } from "@hotmart-org-ca/cosmos-web/dist/react/hc-alert";
import { HcFormField } from "@hotmart-org-ca/cosmos-web/dist/react/hc-form-field";

function AppShell() {
    return (

        <div className="container mx-auto p-4 border-success-400 border-small">
            <HcAlert context="info" dismissible>
                My first alert!
            </HcAlert>
            <HcFormField>
                <label htmlFor="my-input4" slot="label">Label</label>
                <input placeholder="This is a placeholder" id="my-input4" name="my-input4" type="text" />
                <div slot="valid-message">Valid message</div>
                <div slot="invalid-message">Invalid message</div>
                <div slot="support-message">Support message</div>
            </HcFormField>
        </div>
    )
}
export default AppShell
