// Middleware que será acessivel em todo sistema
export const globalMid = (req, res, next) => {
    if (req.body.message.inclues('shit'))
        console.log('Error, word is not permitted')
} 