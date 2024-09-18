<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <div>
            <p>{{ message }}</p> <!-- Это будет скомпилировано Vue -->
            <pre v-pre>{{ message }}</pre> <!-- Это не будет скомпилировано Vue, выведется как есть -->
        </div>
    </template>

    <script setup>
        import { ref } from 'vue';

        const message = ref('Hello, Vue!');
    </scriрt>
    
  `

const exampleCodeJs = `
      <div>
        <p id="message"></p> <!-- Здесь мы выведем значение переменной -->
        <pre>{{ message }}</pre> <!-- Это будет выведено как есть, без интерполяции -->
      </div>

    <script>
        const message = 'Hello, native JS!';
        document.getElementById('message').textContent = message; // Выводим значение переменной
        // <pre> элемент останется неизменным
    </scriрt>
  `



</script>


<template>
    <main>
        <h1>V-PRE</h1>
        <p>v-pre используется для того, чтобы пропустить компиляцию данного элемента и его дочерних элементов Vue. Это
            полезно, если вам нужно вывести исходный HTML или шаблон, без обработки Vue. Когда директива v-pre
            добавляется к элементу, Vue игнорирует его и его содержимое на этапе рендеринга.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>v-pre не принимает никаких выражений или данных. Это просто флаг для пропуска компиляции.</li>
        </ul>
        <h2>Сокращенная запись</h2>
        <ul>
            <li>У директивы v-pre нет сокращенной записи.</li>
        </ul>
        <h2>Модификаторы</h2>
        <ul>
            <li>.prop: Привязывает свойство элемента, а не его атрибут. Полезно для свойств, которые не представлены в
                HTML как атрибуты, например, checked у чекбокса или value у селекта.</li>
            <li>.camel: Привязывает данные к атрибутам с использованием "camelCase" нотации. Этот модификатор
                автоматически преобразует имя свойства из "kebab-case" в "camelCase"</li>
            <li>.sync модификатор обеспечивает двустороннюю привязку данных между родительским и дочерним компонентом.
            </li>
        </ul>

        <h2>Пример на Vue 3 (Composition API)</h2>
        <CodeBlock :code="exampleCode" language="javascript" />
        <ul>
            <li>Первый блок {{ message }} будет заменен значением переменной message, то есть на "Hello, Vue!".</li>
            <li>Второй блок с директивой v-pre выведет текст {{ message }} как есть, без замены на значение.</li>
        </ul>
        <h2>Пример на нативном <span>JavaScript</span></h2>
        <CodeBlock :code="exampleCodeJs" language="javascript" />
    </main>
</template>


<style>
h1,
h2 {
    color: #42d392
}

main {
    color: white;
    font-size: 20px;
}

span {
    color: yellow
}
</style>
