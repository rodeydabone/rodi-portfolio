<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Kontakt aufnehmen</h2>
        <p>Haben Sie ein Projekt im Sinn oder möchten Sie zusammenarbeiten? Kontaktieren Sie mich!</p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div class="contact-details">
              <h3>Standort</h3>
              <p>Birkenfeld 10<br>32278 Kirchlengern<br>Deutschland</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div class="contact-details">
              <h3>E-Mail</h3>
              <a href="mailto:rodi_e_marten@hotmail.com">rodi_e_marten@hotmail.com</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div class="contact-details">
              <h3>Telefon</h3>
              <a href="tel:+4917910158778">+49 179 10158778</a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">💼</div>
            <div class="contact-details">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/rodi-alain-marten" target="_blank" rel="noopener">
                linkedin.com/in/rodi-alain-marten
              </a>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                placeholder="Ihr Name"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email">E-Mail</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="ihre.email@beispiel.de"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="subject">Betreff</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                placeholder="Projektanfrage / Zusammenarbeit"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="message">Nachricht</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                placeholder="Erzählen Sie mir von Ihrem Projekt..."
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn">
              {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht senden' }}
            </button>
            
            <p v-if="submitMessage" style="margin-top: 1rem; text-align: center;">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    const isSubmitting = ref(false)
    const submitMessage = ref('')

    const handleSubmit = () => {
      isSubmitting.value = true
      submitMessage.value = ''
      
      // Simuliere Form-Submission
      setTimeout(() => {
        submitMessage.value = 'Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.'
        isSubmitting.value = false
        
        // Reset form
        formData.value = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        
        // Clear message after 5 seconds
        setTimeout(() => {
          submitMessage.value = ''
        }, 5000)
      }, 1500)
    }

    return {
      formData,
      isSubmitting,
      submitMessage,
      handleSubmit
    }
  }
}
</script>
