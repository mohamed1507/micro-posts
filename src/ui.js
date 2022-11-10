class UI {

    constructor() {
        this.post = document.querySelector('#posts')
        this.titleInput = document.querySelector('#title')
        this.bodyInput = document.querySelector('#body')
        this.idInput = document.querySelector('#id')
        this.postSubmit = document.querySelector('.post-submit')
        this.foeState = 'add'
    }

    showPosts(posts) {
        let output = ''
        posts.forEach((post) => {
            output += `
    
<div class="card mb-3">
<div class="card-body ">

<h4 class="card-title">${post.title}</h4>
<p class="card-title">${post.body}</p>
<a href="#" class="edit card-link" data-id="${post.id}">
<i class="fa fa-pencil"></i></a>


<a href="#" class="delete card-link" data-id="${post.id}">
<i class="fa fa-remove"></i></a>

</div>


</div>

    `

        });
        this.post.innerHTML = output
    }

    showAlert(message, className) {

        this.clearAlert()

        const div = document.createElement('div')
        div.className = className

        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.postsContainer')
        const posts = document.querySelector('#posts')

        container.insertBefore(div, posts)
        setTimeout(() => {
            this.clearAlert()
        }, 3000)

    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert')

        if (currentAlert) {
            currentAlert.remove()

        }
    }
    clearFields() {
        this.titleInput.value = ''
        this.bodyInput.value = ''
    }

    fillForm(data) {
        this.titleInput.value = data.title
        this.bodyInput.value = data.body
        this.idInput.value = data.id
        this.changeFormState('edit')
    }
    clearIdInput() {
        this.idInput.value = ''
    }

    changeFormState(type) {
        if (type === 'edit') {
            this.postSubmit.textContent = 'update post'
            this.postSubmit.className = 'post-submit btn btn-warning btn-block mt-3'

            const button = document.createElement('button')
            button.className = 'post-cancel btn btn-secondary btn-block mt-3'
            button.appendChild(document.createTextNode('cancel edit'))
            const cardForm = document.querySelector('.card-form')
            const formEnd = document.querySelector('.form-end')
            cardForm.insertBefore(button, formEnd)


        } else {
            this.postSubmit.textContent = 'post It'
            this.postSubmit.className = 'mt-3 post-submit btn btn-primary btn-block'
            if (document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove()

            }

            this.clearIdInput()
            this.clearFields()
        }

    }

}



export const ui = new UI()