// Base Cosmos CSS
import '@hotmart-org-ca/cosmos-web/dist/web-components/cosmos-web/cosmos-web.css';

// Cosmos Tokens CSS variables. Theme: hotmart-product
import '@hotmart-org-ca/cosmos-tokens/dist/hotmart-product/base/css/_variables.css';

// Importing Alert component
import { HcAlert } from "@hotmart-org-ca/cosmos-web/dist/react/hc-alert";

function AppShell() {
    return (

        <div className="container mx-auto py-4">
            <HcAlert context="info" dismissible>
                My first alert!
            </HcAlert>
            <div className="flex">
                <div className="flex-none w-14 h-14 bg-amber-300">
                    01
                </div>
                <div className="flex-initial w-64 bg-amber-400">
                    02
                </div>
                <div className="flex-initial w-full bg-amber-500">
                    03
                </div>
            </div>
        </div>
    )
}
export default AppShell
