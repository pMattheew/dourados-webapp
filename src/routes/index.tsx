import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div>hi mom</div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Barbearia Dourado\'s',
  meta: [
    {
      name: 'description',
      content: 'Barbearia Dourado\'s Web Application',
    },
  ],
};
