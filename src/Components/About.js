import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./About.css"
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
function About() {
  return (
    <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ude23MDA7mr-sobwK_1HoDc1P6oQmsUQxw1w70AAXTDIcHK2i6uo9PHog-3JD1I4iWc&usqp=CAU"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm2Pn8d6ujqQAJYC0pZDX_AlKjHCKmeOcJYaJ7rNprIotbq33kb0_rpu0iui0h_s16_fs&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="Big">
        <img
          className="Emaa"
          src="https://contents.mediadecathlon.com/s805127/k$b7a75a384eb75029c4f60f90a3e36bcd/300x0/2855pt1491/2813xcr2110/default.jpg?format=auto"
          alt=""
        />
        <h2 >Céciliane</h2>
        <h3 >Rédactrice conseils</h3>
        <p >
          Coach sportif personnalisé et grande adepte des activités artistiques. Toujours présente pour supporter et admirer les grands événements sportifs !
        </p></div>
     <div className="ALL">
        <h2>Ces articles peuvent vous intéresser</h2>
        <div className="Fa">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://contents.mediadecathlon.com/p1527680/k$2a35b8642b583246289d19a8f85336d3/500x0/3000pt2000/6000xcr4000/marche-nordique.jpg?format=auto" />
          <Card.Body>
            <Card.Title>Qu’est-ce que le sport adapté ? (et pourquoi en faire ?)</Card.Title>
            <Card.Text>
              Parfois attirantes mais compliquées, les activités physiques et sportives sont pourtant accessibles aux personnes en situation de handicap mental ou physique. Alors, on essaye ?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://contents.mediadecathlon.com/p1443827/k$66b2ca93d96e97cf1e24b562d6876b2f/500x0/1000pt666/2000xcr1333/musculation-sport-adapte-seniors.jpg?format=auto" />
          <Card.Body>
            <Card.Title>La musculation, un sport adapte aux seniors</Card.Title>
            <Card.Text>
              A l’heure où la tendance est de rester jeune plus longtemps, certains mettent tout en œuvre pour ralentir les effets du temps sur leur corps. Le sport, et en particulier la musculation, est un bon moyen pour y parvenir.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://contents.mediadecathlon.com/p1698991/k$5d778868ec3f3388af79796656f57f44/500x0/1856pt2784/3712xcr3182/yoga.jpg?format=auto" />
          <Card.Body>
            <Card.Title>Faire du sport enceinte : pour quoi faire ?</Card.Title>
            <Card.Text>
              Ce n’est pas parce que vous attendez un heureux événement qu’il faut faire une croix sur l’activité physique. Au contraire même : faire du sport, à une intensité modérée et en adaptant les disciplines pratiquées, c'est conseillé aux femmes enceintes (qui ont obtenu le feu vert de leur médecin). On vous explique !
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div></div>
  )
}

export default About