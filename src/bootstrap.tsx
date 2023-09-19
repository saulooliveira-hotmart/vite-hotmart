import { ReactElement, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'
import AppShell from "./App.tsx";

interface IApp {
    userId: number | string;
}

const App = ({ userId }: IApp): ReactElement => {
    console.log({ userId })
    return (
        <Suspense fallback={null}>
            <AppShell />
        </Suspense>
    )
};

async function render(rootElement: HTMLElement | null, props: {
    baseUrl?: string;
    lang?: string;
    language?: string;
    userId: number | string;
    permissions: { [key: string]: string[] } | null;
}) {

    const { userId } = props;

    // @ts-ignore
    rootElement?.classList.add('app-change-ownership-wrapper');

    const root = createRoot(rootElement!);
    root.render(<App userId={userId} />);
}

if (process.env.NODE_ENV === 'development') {
    render(document.getElementById('root'),
{
        lang: 'pt-BR',
        userId: 11843955,
        permissions: null
      });
}
export default render;
