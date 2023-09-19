import { ReactElement, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
interface IApp {
    userId: number | string;
}


const App = ({ userId }: IApp): ReactElement => {
    console.log({ userId })
    return (
        <Suspense fallback={null}>
            <div className='change-ownership-wrapper'>
                FUNCIONA
            </div>
        </Suspense>

    )
};


async function render(rootElement: HTMLElement | null, props: {
    baseUrl?: string;
    lang?: string;
    language?: string;
    userId: number | string;
    permissions: never;
}) {

    const { userId } = props;

    // @ts-ignore
    rootElement?.classList.add('app-change-ownership-wrapper');

    const root = createRoot(rootElement!);
    root.render(<App userId={userId} />);
}
export default render;
