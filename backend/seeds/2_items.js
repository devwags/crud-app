/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    { id: 1, 
      userId: 1, 
      itemName: 'Sewing Needles', 
      description: `A sewing needle, used for hand-sewing, is a long slender tool with a pointed tip at one end and a hole (or eye) to hold the sewing thread. 
      The earliest needles were made of bone or wood; modern needles are manufactured from high carbon steel wire and are nickel- or 18K gold-plated for 
      corrosion resistance. High-quality embroidery needles are plated with two-thirds platinum and one-third titanium alloy. Traditionally, needles have 
      been kept in needle books or needlecases which have become objects of adornment. Sewing needles may also be kept in an étui, a small box that held needles 
      and other items such as scissors, pencils and tweezers.`, 
      quantity: 10
    },
    { id: 2, 
      userId: 1, 
      itemName: 'Thread', 
      description: `A thread is a long strand of material, often composed of several filaments or fibres, used for joining, creating or decorating textiles. 
      Ancient Egyptians were known for creating thread using plant fibers, wool and hair. Today, thread can also be made of many different materials 
      including but not limited to cotton, wool, linen, nylon, silk, polyester etc. There are also metal threads (sometimes used in decorative textiles), 
      which can be made of fine wire.`, 
      quantity: 5
    },
    { id: 3, 
      userId: 2, 
      itemName: 'Briefcase', 
      description: `A briefcase is a narrow hard-sided box-shaped bag or case used mainly for carrying papers and equipped with a handle. Lawyers commonly 
      use briefcases to carry briefs to present to a court, hence the name. Businesspeople and other white collar professionals also use briefcases to carry 
      papers, and since the 1980s, electronic devices such as laptop computers and tablet computers. Some briefcases have only a main internal space, while 
      others may have subsections, accordion sections, small pockets, or dividers. Briefcases may be made from leather, vinyl, durable fabric, thin metal 
      (such as aluminium), or plastic. Leather, vinyl, or fabric briefcases may have externally-accessible pockets or sleeves in addition to the main 
      storage space. Some briefcases made of fabric may have a shoulder strap. Briefcases typically have a lock to protect the contents. Nowadays, 
      briefcases may have padded internal pouches to protect laptop computers.`, 
      quantity: 10
    },    
    { id: 4, 
      userId: 2, 
      itemName: 'Suit', 
      description: `A suit, lounge suit, or business suit is a set of clothes comprising a suit jacket and trousers of identical textiles generally worn 
      with a collared dress shirt, necktie, and dress shoes. A skirt suit is similar, but with a matching skirt instead of trousers. It is currently 
      considered semi-formal wear or business wear in contemporary Western dress codes, however when the suit was originally developed it was considered 
      an informal or more casual option compared to the prevailing clothing standards of aristocrats and businessmen. The lounge suit originated in 
      19th-century Britain as sportswear and British country clothing, which is why it was seen as more casual than citywear at that time, with the roots 
      of the suit coming from early modern Western Europe formal court or military clothes. After replacing the black frock coat in the early 20th century 
      as regular daywear, a sober one-coloured suit became known as a lounge suit.`, 
      quantity: 5
    },
    { id: 5, 
      userId: 3, 
      itemName: 'Cleaving Axe', 
      description: `A cleaving axe or cleaver is a form of axe used within green woodworking to split wood lengthways. Cleaving (riving) is used to turn 
      a log into lumber or billets (short or thick pieces of wood) into firewood. Splitting axe is sometimes described as an old name for a splitting maul
       or froe.`, 
      quantity: 5
    },
    { id: 6, 
      userId: 3, 
      itemName: 'Firewood', 
      description: `Firewood is any wooden material that is gathered and used for fuel. Generally, firewood is not heavily processed and is in some sort 
      of recognizable log or branch form, compared to other forms of wood fuel like pellets. Firewood can be seasoned and heat treated (dry) or unseasoned 
      (fresh/wet). It is generally classified as either hardwood or softwood.`, 
      quantity: 10
    },  
  ]);
};
