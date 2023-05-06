import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4996.808168694313!2d85.2800256423573!3d27.67783419096345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb180da893d8c9%3A0xd311dde3e7893d9!2sPadmakasthapur%20Department%20Store%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1676968811851!5m2!1sen!2snp" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mqkoqlqk" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off" />
            <input type="email" placeholder="Email" name="Email" required autoComplete="off" />
            <textarea name="message" required autoComplete="off" placeholder="Enter your message"></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
