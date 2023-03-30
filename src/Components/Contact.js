import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import "./Contact.css"
function Contact() {
  return (
    <div>
      <Form className="Global">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Figure>
      <Figure.Caption>
          <h2> Activité physique adaptée : définition</h2>
          <p> “Un mouvement à dépenses énergétiques qui a un objectif thérapeutique, destiné à permettre à l'individu une réadaptation, une réhabilitation et un bien être au quotidien.” C’est comme ça que Brigitte me définit ce terme et cette pratique. “L'activité physique adaptée” est une notion différente du sport adapté car elle englobe toutes les pratiques sportives. Elle date des années 70, développée d’abord à Québec, les pionniers et précurseurs de l’activité physique adaptée, puis dans les années 90 en Europe. Longtemps connu sous le sigle d'APA, il s’écrit depuis 2007 APAS, mettant ainsi l’accent sur l’aspect santé (activité physique adaptée et santé). La différence avec une pratique sportive lambda est que l’APA a une perspective thérapeutique, éducative et préventive. Sa force est l’adaptation et la personnalisation de la pratique physique.
          </p>
        </Figure.Caption>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://contents.mediadecathlon.com/s870993/k$4b517b068c63c04361b0299a1ed6b8ac/1920x0/4096pt3143/8192xcr4228/sport-adapte.jpg?format=auto"
        />
      </Figure>
      <Figure>
      <Figure.Caption>
          <h2>Activité physique adaptée sur prescription médicale : qui peut encadrer le sport sur ordonnance ?</h2>
          <p>Le sport comme traitement ? Depuis 2017, les médecins peuvent prescrire de l’activité physique adaptée.
            À qui ? Pourquoi ? Comment ça marche ? Mélody Paillat, enseignante APA (activité physique adaptée) auprès de la fédération française “Sports pour tous”, nous explique tout !
          </p>
        </Figure.Caption>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://contents.mediadecathlon.com/s870716/k$7e75b29a494ca16cca36b81458bac9c1/1920x0/4096pt2975/8192xcr4681/sport-adapte.jpg?format=auto"
        />
       
      </Figure>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://contents.mediadecathlon.com/s870412/k$503e2a259fd20e158f040e75ad8adb6d/1920x0/3791pt2529/7582xcr4083/sport-adapte-handicap.jpg?format=auto"
        />
        <Figure.Caption>
          <h2>L'activité physique adaptée pour les personnes âgées : pourquoi faire ?</h2>
          <p>L’activité physique est conseillée tout au long de notre vie. Maxime explique l’importance de celle-ci chez les personnes âgées : “Cela permet de lutter contre toutes les pathologies liées au vieillissement. L'activité est principalement axée sur la diminution des risques de chute. Elle favorise les doubles tâches comme parler en marchant, améliore la densité osseuse, entretient les capacités existantes. L'objectif est de maintenir l'autonomie Elle permet aussi d'entretenir le cœur et les capacités respiratoires avec des activités adaptées comme de la boxe, le taï chi ou même le basket. Le cours collectif chez les personnes âgées est aussi bénéfique pour lutter contre l'isolement social."
          </p>
        </Figure.Caption>
      </Figure>
      <Figure>
     
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://contents.mediadecathlon.com/s874783/k$6d4f662c21003b4b1cd9d10eebe548a5/1920x0/3848pt2797/7695xcr4397/sport-adapte.jpg?format=auto"
        />
     <Figure.Caption>
          <h2>Les associations d'activités physiques adaptées et les centres privés</h2>
          <p>De nombreuses associations qui proposent des activités physiques adaptées existent et ont chacune leur domaine de prédilection. Certaines se sont spécialisées dans la pratique d’une activité pendant un cancer, d’autres proposent des activités pour un public atteint d’autisme ou encore des associations dont la particularité est le public sénior. Rapprochez-vous de vos mairies pour connaître les associations présentes autour de chez vous.</p>
        </Figure.Caption>
      </Figure>

    </div>

  );
}

export default Contact;